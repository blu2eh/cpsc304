import express from "express";
import {
    getMeats,
    getGrains,
    getVegetables,
    getFruits,
    getSeafoods,
} from"../controllers/GroceryList.js";

const router = express.Router();

router.get("/", getMeats)
router.get("/", getVegetables)
router.get("/", getGrains)
router.get("/", getFruits)
router.get("/", getSeafoods)

export default router;
