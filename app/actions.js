"use server";
import OpenAI from "openai";
import { Client } from "@octoai/client";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const client = new Client(process.env.OCTOAI_TOKEN);

export async function createCompletion(userFlavor, userLiquor, userMood) {
  if (!userFlavor && !userLiquor && !userMood) {
    return { error: "preferences have not been set" };
  }

  // Generate recipe using OpenAI - GPT-3.5
  const userPreferences = `contains ${userLiquor} and emphasizes a ${userFlavor} flavor profile for a ${userMood} mood`;

  const instructions = `create a unique cocktail based on the user preferences in the text delimited by triple periods `;
  // const output_format =
  //   'JSON output should look like: "name", "description" "ingredients" (array of key-value pairs with "name" and "quantity"), "instructions"';
  const jsonformat = {
    name: "Sour Nostalgia",
    description:
      "A unique cocktail with a nostalgic twist, featuring a sour flavor profile with a hint of nostalgia",
    ingredients: [
      {
        name: "Vodka",
        quantity: "2 oz",
      },
      {
        name: "Lemon Juice",
        quantity: "1 oz",
      },
    ],
    instructions:
      "Add all ingredients to a cocktail shaker without ice. Dry shake vigorously for 10-15 seconds. Add ice and shake again until well chilled.",
  };

  const output_format = `JSON output should look like: ${JSON.stringify(
    jsonformat
  )}`;

  const prompt = instructions + output_format + `...${userPreferences}...`;
  const messages = [
    {
      role: "system",
      content: "You are a helpful mixologist designed to output JSON.",
    },
    { role: "user", content: prompt },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });
  // console.log(messages);

  const recipeResponse = completion.choices[0].message.content;
  if (!recipeResponse) {
    return { error: "Unable to generate recipe" };
  }

  try {
    const recipe = JSON.parse(recipeResponse);

    if (
      !recipe.name ||
      !Array.isArray(recipe.ingredients) ||
      !recipe.instructions
    ) {
      throw new Error("Invalid recipe format");
    }
    // console.log(`prompt: ${prompt}`);
    console.log("recipe creation completed...");
    return recipe;
  } catch (error) {
    console.error("Error parsing recipe:", error);
    return { error: "Unable to parse recipe as JSON" };
  }
}

export async function createImage() {
  const endpointUrl = "https://image.octoai.run/generate/sdxl";
  const modifiedPrompt = `In the center of the bar, illuminated by a spotlight emanating from the ceiling, sits a masterpiece of cocktail. A crystal coupe glass cradles a cocktail containing gin, lemon juice, simple syrup, orange bitters, and egg white. A liquor bottle of gin next to cocktail.Utilizing photorealistic and hyper-detailed style to capture the rich textures and vibrant colors of the scene. Additionally emphasize the interplay of light and shadow, creating a sense of drama and intrigue.`;
  const inputs = {
    prompt: modifiedPrompt,
    negative_prompt:
      "Blurry photo, distortion, low-res, poor quality, multiple cocktail glasses",
    width: 1536,
    height: 640,
    num_images: 1,
    sampler: "DDIM",
    steps: 30,
    cfg_scale: 12,
    use_refiner: true,
    high_noise_frac: 0.8,
    style_preset: "Watercolor",
  };
  const outputs = await client.infer(endpointUrl, inputs);
  const images = outputs.images.map((output, i) => {
    const buffer = Buffer.from(output.image_b64, "base64");
    const imageData = buffer.toString("base64"); // Use base64 for API response
    return {
      filename: `result${i}.jpg`,
      imageData,
    };
  });

  return images;
}
