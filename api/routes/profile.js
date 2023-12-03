import express from "express";
import {
    getUser
} from "../controllers/profile.js";

const router = express.Router();

router.get("/:id", getUser)

export default router;