import express from "express";
import {
    addPantry,
    removePantry,
    pantryDisplay
} from "../controllers/pantry.js";

const router = express.Router();

router.post("/", addPantry)
router.delete("/", removePantry)
router.get("/", pantryDisplay)

export default router;
