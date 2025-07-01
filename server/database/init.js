import fs from "fs";
import { pool } from "./db.js";

const schema = fs.readFileSync("./schema.sql", "utf8");

pool
  .query(schema)
  .then(() => {
    console.log("Database initialized.");
    process.exit();
  })
  .catch((err) => {
    console.error("Failed to initialize database", err);
    process.exit(1);
  });
