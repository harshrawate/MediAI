import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import analyzeRoutes from "./routes/analyzeRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoutes);
app.use("/api/chat", chatRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});