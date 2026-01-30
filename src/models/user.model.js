import "dotenv/config";
import bcrypt from "bcrypt";
import { pool } from "../config/db.js";


export async function createUser({name, email, password}) {
    const passwordHash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

    const query = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, created_at
    `;

    const values = [name, email, passwordHash];
    const { rows } = await pool.query(query, values);

    return rows[0];
}

export async function getAllUsers() {
    const { rows } = await pool.query("SELECT id, name, email, created_at FROM users");
    return rows;
}

export async function getUserByEmail(email) {
    const { rows } = await pool.query("SELECT id, name, email, created_at FROM users WHERE email = $1", [email]);

    return rows[0];
}
