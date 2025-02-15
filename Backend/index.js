import "colors";
import express from "express"; // node js frameworked used to build out applications
import morgan from "morgan"; // logs to the console http resquests
import db from "./database.js";
import bodyParser from "body-parser";
import cors from "cors"; // Cross-Origin Resource Sharing - for commincating with web server - trusted routes i.e. http://localhost:3000
import helmet from "helmet"; // HTTP Headers
import hpp from "hpp"; // HTTP Parameter Pollution attacks

const app = express();
app.use(morgan("dev"));
app.use(hpp());
app.use(helmet());
app.use(hpp());

// Enable CORS
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    allowedHeaders: [
      "userCsrf",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    exposedHeaders: ["userCsrf"],
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/comments", (req, res) => {
  const query = "SELECT * FROM comments";
  const comments = db.prepare(query).all();
  res.json({ comments: comments });
});

app.post("/comments", (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, body } = req.body;

    if (!name || !email || !body) {
      return res.status(400).json({ error: "Missing data" });
    }

    const sql = db.prepare(
      "INSERT INTO comments (name,email,body) VALUES (?,?,?)"
    );
    sql.run(name, email, body);
    const query = "SELECT * FROM comments";
    const comments = db.prepare(query).all();
    res.status(201).json({ comments: comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.put("/comments", (req, res) => {
  // Code to update a comment
});

app.delete("/comments", (req, res) => {
  // Code to delete a comment
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Database Error: ${err.message}`);
  // Close Server and Exit
  server.close(() => process.exit(1));
});
