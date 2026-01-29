import "dotenv/config";
import app from "./app.js";
import { pool } from "./config/db.js";

const PORT = process.env.PORT || 4000;

async function startServer() {
    try {
        await pool.query("SELECT 1");
        console.log("Database connected ✅");

        app.listen(PORT, "0.0.0.0", () => {
            console.log("Server running on port " + PORT);
        });
    } catch (error) {
        console.error("Failed to connect to database", error);
        process.exit(1);
    }
}

startServer();
