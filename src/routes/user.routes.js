import { Router } from "express";
import { createUser, getAllUsers } from "../models/user.model.js";

const router = Router();

router.get("/create-user", async (req, res) => {
    try {
        const user = await createUser({
            name: "User",
            email: `user_${Date.now()}@test.com`,
            password: "user_123"
        });

        res.json({
            created: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
});

router.get("/get-users", async (req, res) => {
    try {
        const users = await getAllUsers();

        res.json({
            allUsers: users
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error.message
        });
    }
});

export default router;
