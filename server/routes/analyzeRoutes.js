import express from "express";
import multer from "multer";
import { analyzeProduct } from "../controllers/analyzeController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), analyzeProduct);

export default router;