import express from "express";
import {
    addFoodItemToInventory,
    displayInventory
} from "../controllers/inventory.js";

const router = express.Router();

router.get("/", addFoodItemToInventory);
router.get("/", displayInventory);

export default router;
