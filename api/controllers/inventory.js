import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Define separate functions for each query operation with callbacks

function checkFoodItemExistence(foodName, callback) {
    const query = "SELECT ItemID FROM FoodItem WHERE ItemName = ?";
    db.query(query, [foodName], callback);
}

function addFoodItem(foodName, callback) {
    const insertQuery = "INSERT INTO FoodItem (ItemName) VALUES (?)";
    db.query(insertQuery, [foodName], callback);
}

function insertItemIntoStorage(itemID, deviceID, compartmentName, expiryDate, count, callback) {
    const insertQuery = "INSERT INTO ItemStorage (ItemID, DeviceID, CompartmentName, ExpiryDate, Count) VALUES (?, ?, ?, ?, ?)";
    db.query(insertQuery, [itemID, deviceID, compartmentName, expiryDate, count], callback);
}

function initializeInventoryLog(itemID, itemCount, callback) {
    const logQuery = "INSERT INTO Log (LogTimeVal, ItemCount, ItemID) VALUES (NOW(), ?, ?)";
    db.query(logQuery, [itemCount, itemID], callback);
}


function fetchInventory(deviceID, callback) {
    const selectQuery = "SELECT * FROM ItemStorage WHERE DeviceID = ?";
    db.query(selectQuery, [deviceID], callback);
}

function checkItemInStorage(itemID, deviceID, compartmentName, callback) {
    const query = "SELECT * FROM ItemStorage WHERE ItemID = ? AND DeviceID = ? AND CompartmentName = ?";
    db.query(query, [itemID, deviceID, compartmentName], callback);
}

function incrementItemCount(itemID, deviceID, compartmentName, callback) {
    const query = "UPDATE ItemStorage SET count = count + 1 WHERE ItemID = ? AND DeviceID = ? AND CompartmentName = ?";
    db.query(query, [itemID, deviceID, compartmentName], callback);
}
// Define controller methods using callbacks

export const addFoodItemToInventory = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");
    const { foodName, deviceID, compartmentName, expiryDate } = req.body;
    if (!foodName || !deviceID || !compartmentName || !expiryDate) {
        return res.status(400).json("All fields are required");
    }

    // Check for the food item's existence and get the ID
    checkFoodItemExistence(foodName, (err, foodItems) => {
        if (err) return res.status(500).send(err);

        let itemID;
        if (foodItems.length > 0) {
            itemID = foodItems[0].ItemID;
            // If food item exists, check if it's in the storage already
            checkItemInStorage(itemID, deviceID, compartmentName, (err, items) => {
                if (err) return res.status(500).send(err);

                if (items.length > 0) {
                    // Item exists, increment count
                    incrementItemCount(itemID, deviceID, compartmentName, (err) => {
                        if (err) return res.status(500).send(err);
                        return res.status(200).json({ message: "Item count incremented successfully" });
                    });
                } else {
                    // Item does not exist, insert it
                    insertItemIntoStorage(itemID, deviceID, compartmentName, expiryDate, (err) => {
                        if (err) return res.status(500).send(err);
                        return res.status(200).json({ message: "Food item added to inventory successfully" });
                    });
                }
            });
        } else {
            // If food item does not exist, add it to FoodItem table
            addFoodItem(foodName, (err, result) => {
                if (err) return res.status(500).send(err);
                itemID = result.insertId;
                const itemCount = req.body.count;
                initializeInventoryLog(itemID, itemCount, (err) => {
                    if (err) {
                        throw err
                    }
                });
                insertItemIntoStorage(itemID, deviceID, compartmentName, expiryDate, (err) => {
                    if (err) return res.status(500).send(err);
                    return res.status(200).json({ message: "Food item added to inventory successfully" });
                });
            });
        }
    });
};

export const displayInventory = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");
    const deviceID = req.params.deviceID;
    if (!deviceID) {
        return res.status(400).json("Device ID is required");
    }

    fetchInventory(deviceID, (err, inventory) => {
        if (err) return res.status(500).send(err);
        if (inventory.length === 0) {
            return res.status(404).json({ message: "No inventory found for this device." });
        }
        return res.status(200).json(inventory);
    });
};
