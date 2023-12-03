import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addPantry = async (req, res) => {
    const token = req.cookies.access_Token;
    console.log(token)
    if (!token) return res.status(401).json("Not authenticated");

    let deviceId;

    try {
        const decoded = jwt.verify(token, "jwtkey"); // Replace "jwtkey" with your actual secret key
        const userId = decoded.id; // Assuming 'id' is the name of the payload property containing the user ID

        deviceId = await initializeDeviceID();
        const pantryValues = [deviceId, req.body.nickname];
        const pantryQuery = "INSERT INTO `Pantry` (`DeviceID`, `NickName`) VALUES (?, ?)";
        await db.promise().query(pantryQuery, pantryValues);

        const ownQuery = "INSERT INTO `Owns` (`DeviceID`, `UserID`) VALUES (?, ?)";
        await db.promise().query(ownQuery, [deviceId, userId]);

        return res.status(200).json({ message: "Pantry added successfully" });
    } catch (err) {
        if (deviceId) {
            await removePantryIfError(deviceId);
        }
        return res.status(500).json({ message: "Failed to add pantry", error: err.message });
    }
};

async function initializeDeviceID() {
    const query = "INSERT INTO `StorageDevice` () VALUES ();";
    const [result] = await db.promise().query(query);
    return result.insertId;
}

async function removeDeviceID(deviceId) {
    const query = "DELETE FROM `StorageDevice` WHERE `DeviceID` = ?;";
    await db.promise().query(query, [deviceId]);
}

async function removePantryIfError(deviceID) {
    const deletePantryQuery = 'DELETE FROM `Pantry` WHERE `DeviceID` = ?';
    await db.promise().query(deletePantryQuery, [deviceID]);
    await removeDeviceID(deviceID);
}

export const removePantry = async (req, res) => {
    const deviceID = req.params.deviceID;
    if (!deviceID) return res.status(400).json("Device ID is required");

    try {
        await removePantryIfError(deviceID);
        return res.status(200).json({ message: "Pantry removed successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Failed to remove pantry", error: err.message });
    }
};

export const pantryDisplay = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json("Not authenticated");
    }

    try {
        const decoded = jwt.verify(token, "jwtkey"); // Replace "jwtkey" with your actual secret key
        const userId = decoded.id; // Assuming 'id' is the name of the payload property containing the user ID

        const query = `
            SELECT p.DeviceID, p.NickName
            FROM Pantry p
            INNER JOIN Own o ON p.DeviceID = o.DeviceID
            WHERE o.UserID = ?;
        `;

        const [pantries] = await db.promise().query(query, [userId]);
        if (pantries.length === 0) {
            return res.status(404).json({ message: "No pantries found for this user." });
        }
        return res.status(200).json(pantries);
    } catch (err) {
        // If the error is due to token verification, respond with 403 Forbidden
        if (err.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: "Token is not valid", error: err.message });
        }
        // For other errors, respond with 500 Internal Server Error
        return res.status(500).json({ message: "An error occurred while retrieving pantries", error: err.message });
    }
};
