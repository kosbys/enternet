import { pool } from "../database/db.js";

export const getAllUsers = () => {
  pool
    .query("SELECT id, name, email FROM users")
    .then((results) => results.rows);
};

export const getUserById = (id) => {
  const query = `SELECT id, name, email FROM users WHERE id = $1`;

  pool.query(query, [id]).then((results) => results.rows[0]);
};
