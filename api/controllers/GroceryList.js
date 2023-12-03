import { db } from "../db.js"; // Adjust the import path as necessary

// Helper function to retrieve low inventory items by category
const getLowInventoryItemsByCategory = async (category) => {
    const threshold = 5; // Define your own threshold for low inventory
    try {
        const items = await db.query(`
      SELECT fi.ItemName, il.count
      FROM InventoryLog il
      JOIN FoodItem fi ON il.ItemID = fi.ItemID
      WHERE fi.FoodItemType = ? AND il.count <= ?
    `, [category, threshold]);
        return items;
    } catch (error) {
        console.error(`Error fetching low inventory items for category ${category}:`, error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};

// Controller functions for each category
export const getFruits = async (req, res) => {
    try {
        const items = await getLowInventoryItemsByCategory('Fruit');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(`Error fetching fruit category: ${error.message}`);
    }
};

export const getVegetables = async (req, res) => {
    try {
        const items = await getLowInventoryItemsByCategory('Vegetable');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(`Error fetching vegetable category: ${error.message}`);
    }
};

export const getSeafoods = async (req, res) => {
    try {
        const items = await getLowInventoryItemsByCategory('Seafood');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(`Error fetching seafood category: ${error.message}`);
    }
};

export const getMeats = async (req, res) => {
    try {
        const items = await getLowInventoryItemsByCategory('Meat');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(`Error fetching meat category: ${error.message}`);
    }
};

export const getGrains = async (req, res) => {
    try {
        const items = await getLowInventoryItemsByCategory('Grain');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(`Error fetching grain category: ${error.message}`);
    }
};
