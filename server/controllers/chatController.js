import { chatResponse } from "../services/geminiService.js";

export const chatWithProduct = async (req, res) => {
  try {
    const { product, message } = req.body;

    const reply = await chatResponse(product, message);

    res.json({ reply });

  } catch (err) {
    res.status(500).json({ error: "Chat failed" });
  }
};