import { pool } from "../database/db.js";

// change to then()

export const getAllUsers = async () => {
  const results = await pool.query("SELECT id, name, email FROM users");

  return results.rows;
};

export const getUserById = async (id) => {
  const query = `SELECT id, name, email FROM users WHERE id = $1`;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};
