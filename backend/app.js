import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import askRoute from "./routes/ask.js";

dotenv.config();

const allowedOrigins = [
  'https://bharatsetu-git-main-gunjan-gargs-projects.vercel.app',
];

const app = express();
const PORT = process.env.PORT || 5000;

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
// app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Routes
app.use("/api/ask", askRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});