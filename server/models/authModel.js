import { pool } from "../database/db.js";
import { encryptPassword } from "../utils/password.js";

// change to then()

export const findUserLogin = async (nameOrEmail) => {
  const query = `SELECT id, name, email FROM users where name = $1 OR email = $1 LIMIT 1`;

  const { rows } = await pool.query(query, [nameOrEmail]);

  return rows[0] || null;
};

export const findUserRegister = async (name, email) => {
  const query = `SELECT id, name, email FROM users where name = $1 OR email = $2 LIMIT 1`;

  const { rows } = await pool.query(query, [name, email]);

  return rows[0] || null;
};

export const createUser = async (name, email, password) => {
  const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $2) RETURNING id, name, email`;

  const hashedPassword = encryptPassword(password);

  const values = [name, email, hashedPassword];

  const rows = await pool.query(query, values);

  return rows[0];
};
