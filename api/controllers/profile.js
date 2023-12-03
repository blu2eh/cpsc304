import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");
    // Determine the query based on the presence of 'id' query parameter
    const query = req.query.id
        ? "SELECT * FROM users WHERE id = ?"
        : "SELECT * FROM users";

    // Prepare the query parameters
    const queryParams = req.query.id ? [req.query.id] : [];

    // Execute the query
    db.query(query, queryParams, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }

        // If a specific user is requested and not found
        if (req.query.id && data.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user(s) data
        return res.status(200).json(data);
    });
};
