import { pool } from "../db";
import { encryptPassword } from "../utils/password";

export const findUser = async (name, email) => {
  const query = `SELECT id, name, email FROM users where name = $1 OR email = $2`;

  const { rows } = await pool.query(query, [name, email]);

  return rows[0];
};

export const createUser = async ({ name, email, password }) => {
  const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $2) RETURNING id, name, email`;

  const hashedPassword = encryptPassword(password);

  const values = [name, email, hashedPassword];

  const rows = await pool.query(query, values);

  return rows[0];
};
