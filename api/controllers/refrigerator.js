import { db } from "../db.js";
import jwt from "jsonwebtoken";
import res from "express/lib/response.js";

export const addRefrigerator = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");

    try {
        const decoded = jwt.verify(token, "jwtkey"); // Replace "jwtkey" with your actual secret key
        const userId = decoded.id; // Assuming 'id' is the name of the payload property containing the user ID

        // Initialize a new DeviceID
        const deviceId = await initializeDeviceID();

        // Insert a new Refrigerator with the new DeviceID
        const refrigeratorValues = [
            deviceId,
            req.body.serialNumber, // Assuming you have serialNumber in the request body
            req.body.brand,
            req.body.modelNumber // Assuming you have modelNumber in the request body
        ];
        const refrigeratorQuery = "INSERT INTO `Refrigerator` (`DeviceID`, `Serial#`, `Brand`, `Model#`) VALUES (?, ?, ?, ?)";
        await db.promise().query(refrigeratorQuery, refrigeratorValues);

        // Assign the DeviceID to the User
        const ownQuery = "INSERT INTO `Own` (`DeviceID`, `UserID`) VALUES (?, ?);";
        await db.promise().query(ownQuery, [deviceId, userId]);

        return res.status(200).json({ message: "Refrigerator added successfully" });
    } catch (err) {
        if (deviceId) {
            await removeRefrigeratorIfError(deviceId);
        }
        return res.status(500).json({ message: "Failed to add refrigerator", error: err.message });
    }
};


async function initializeDeviceID() {
    const query = "INSERT INTO StorageDevice () VALUES ();";
    await db.query(query, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return data.insertId;
    });
}

async function removeDeviceID(deviceId) {
    const query = "DELETE FROM StorageDevice WHERE DeviceID = ?;";
    await db.query(query, [deviceId], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
}

async function removeRefrigeratorIfError(deviceID) {
    try {
        const deleteRefrigeratorQuery = 'DELETE FROM Refrigerator WHERE DeviceID = ?';
        await db.query(deleteRefrigeratorQuery, [deviceID], (err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });
        await removeDeviceID(deviceID);
        console.log(`Refrigerator and associated ownerships with deviceID ${deviceID} removed successfully.`);
    } catch (err) {
        // If any error occurs, rollback the transaction
        await queryDatabase('ROLLBACK');
        console.error(`Error removing refrigerator with deviceID ${deviceID}:`, err);
        throw err;
    }
}

export const removeRefrigerator  = async (req, res) => {
    try {
        const deviceID = req.params.deviceID;
        // Step 1: Delete from ownership table (if exists)
        const deleteOwnershipQuery = 'DELETE FROM Own WHERE DeviceID = ?';
        await db.query(deleteOwnershipQuery, [deviceID], (err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });
        await removeRefrigeratorIfError(deviceID);
    } catch (err) {
        // If any error occurs, rollback the transaction
        await queryDatabase('ROLLBACK');
        console.error(`Error removing refrigerator with deviceID ${deviceID}:`, err);
        throw err; // Throw the error so it can be handled by the caller
    }
}

export const refrigeratorDisplay = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");

    try {
        const decoded = jwt.verify(token, "jwtkey"); // Replace "jwtkey" with your actual secret key
        const userId = decoded.id; // Assuming 'id' is the name of the payload property containing the user ID

        const query = `
            SELECT r.DeviceID, r.SerialNumber, r.Brand, r.ModelNumber
            FROM Refrigerator r
            INNER JOIN Own o ON r.DeviceID = o.DeviceID
            WHERE o.UserID = ?;
        `;

        const [refrigerators] = await db.promise().query(query, [userId]);
        // If the database does not return any refrigerators, send a 404 response.
        if (refrigerators.length === 0) {
            return res.status(404).json({ message: "No refrigerators found for this user." });
        }
        // Send back the list of refrigerators.
        return res.status(200).json(refrigerators);
    } catch (err) {
        return res.status(500).json({ message: "An error occurred while retrieving refrigerators", error: err.message });
    }
};
