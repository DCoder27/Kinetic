import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, "../public");

app.use(clerkMiddleware());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

// Serve index.html for any non-API routes (SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
