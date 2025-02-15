import jsonDatabase from "../Frontend/comments.json" assert { type: "json" };
import Database from "better-sqlite3";
const db = new Database("mini_project.db");

export const createTable = () => {
  db.exec(
    "CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT,body TEXT)"
  );
};

export const seedDatabase = () => {
  const stmt = db.prepare(
    "INSERT INTO comments (name,email,body) VALUES (?,?,?)"
  );
  jsonDatabase.forEach((comment) => {
    stmt.run(comment.name, comment.email, comment.body);
  });
};

export default db;
