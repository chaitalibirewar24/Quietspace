const { Client } = require("pg");

const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root123",
  database: "login", // ✅ Make sure this is correct
});

db.connect()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch((err) => console.error("❌ PostgreSQL connection error:", err));

module.exports = db;