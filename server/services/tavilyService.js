import { tavily } from "@tavily/core";
import dotenv from "dotenv";
dotenv.config();

const tvly = new tavily({
  apiKey: process.env.TAVILY_API_KEY
}); 

export async function searchIngredients(productName) {
  const query = `${productName} ingredients list`;

  const res = await tvly.search(
    query,                 // ✅ string
    { max_results: 3 }     // ✅ options (separate param)
  );

  return JSON.stringify(res);
}