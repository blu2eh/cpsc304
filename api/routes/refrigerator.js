import express from "express";
import {
    addRefrigerator,
    removeRefrigerator,
    refrigeratorDisplay
} from "../controllers/refrigerator.js";

const router = express.Router();

router.get("/:id", addRefrigerator)
router.get("/:id", removeRefrigerator)
router.get("/:id", refrigeratorDisplay)

export default router;
