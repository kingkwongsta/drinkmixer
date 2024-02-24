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
  const inputs = {
    prompt: "A photo of a cute cat astronaut in space",
    negative_prompt: "Blurry photo, distortion, low-res, poor quality",
    width: 1024,
    height: 1024,
    num_images: 1,
    sampler: "DDIM",
    steps: 30,
    cfg_scale: 12,
    use_refiner: true,
    high_noise_frac: 0.8,
    style_preset: "base",
  };
  const outputs = await client.infer(endpointUrl, inputs);
  const images = outputs.images.map((output, i) => {
    const dataUrl = `data:image/jpeg;base64,${output.image_b64}`;
    return {
      filename: `result${i}.jpg`, // Optional for reference
      dataUrl,
    };
  });

  return images;
}
