import { analyzeImage } from "../services/geminiService.js";
import { searchIngredients } from "../services/tavilyService.js";

function cleanJSON(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export const analyzeProduct = async (req, res) => {
  try {
    const imagePath = req.file.path;

    // Step 1: Initial analysis
    let result = await analyzeImage(imagePath);

    result = cleanJSON(result);

    // Step 2: Extract product name
    const parsed = JSON.parse(result);
    const productName = parsed.productName;

    // Step 3: Tavily fallback
    const tavilyData = await searchIngredients(productName);

    // Step 4: Final analysis with Tavily
    result = await analyzeImage(imagePath, tavilyData);

    result = cleanJSON(result);

    res.json(JSON.parse(result));

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};