import { pool } from "../database/db.js";
import { encryptPassword } from "../utils/password.js";

export const findUserLogin = (nameOrEmail) => {
  const query = `SELECT id, name, email FROM users where name = $1 OR email = $1 LIMIT 1`;

  pool.query(query, [nameOrEmail]).then((rows) => rows[0] || null);
};

export const findUserRegister = (name, email) => {
  const query = `SELECT id, name, email FROM users where name = $1 OR email = $2 LIMIT 1`;

  pool.query(query, [name, email]).then((rows) => rows[0] || null);
};

export const createUser = async (name, email, password) => {
  const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $2) RETURNING id, name, email`;

  const hashedPassword = encryptPassword(password);

  const values = [name, email, hashedPassword];

  pool.query(query, values).then((rows) => rows[0]);
};
