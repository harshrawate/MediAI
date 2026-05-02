import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const model = "gemini-2.5-flash";

export async function analyzeImage(buffer, mimeType, tavilyData = "") {
  const image = {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType: mimeType
    }
  };

  const prompt = `
  Analyze this product and return JSON:
  {
    "productName": "",
    "ingredients": [],
    "healthScore": 0,
    "risks": [],
    "recommendation": ""
  }

  Use this external data if needed:
  ${tavilyData}
  `;

  const result = await genAI.models.generateContent({
    model: model,
    contents: [
      { role: "user", parts: [{ text: prompt }, image] }
    ]
  });

  return result.text;
}

export async function chatResponse(product, message) {
  const result = await genAI.models.generateContent({
    model: model,
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
            Product: ${product.productName}
            Ingredients: ${product.ingredients}

            User: ${message}
            `
          }
        ]
      }
    ]
  });

  return result.text;
}