import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

app.use(clerkMiddleware());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

export default app;
