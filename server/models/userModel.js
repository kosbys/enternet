import { pool } from "../db";
import encryptPassword from "../utils/auth";

export const getAllUsers = async () => {
  const results = await pool.query("SELECT id, name, email FROM users");

  return results.rows;
};

export const getUserById = async (id) => {
  const result = await pool.query(
    `SELECT id, name, email FROM users WHERE id = ${id}`
  );

  return result.rows[0];
};

export const createUser = async ({ name, email, password }) => {
  const hashedPassword = await encryptPassword(password);

  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword}) RETURNING *`
  );

  const { password: _, ...userDetails } = result.rows[0];

  return userDetails;
};
