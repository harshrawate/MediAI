import express from "express";
import { chatWithProduct } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", chatWithProduct);

export default router;