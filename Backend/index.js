import "colors";
import express from "express"; // node js frameworked used to build out applications
import morgan from "morgan"; // logs to the console http resquests
// import connectDB from "./_mongoDB"; // mongo DB connection
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

// connectDB();
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
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
