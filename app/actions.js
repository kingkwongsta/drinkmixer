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

  const instructions = `create a unique cocktail based on the user preferences in the text delimited by triple periods, ensure the drink name doesn't use the same/similar words to ${userMood},${userFlavor},${userLiquor}, `;
  const output_format =
    'JSON output should contain: "name", "ingredients" (array of key-value pairs with "name" and "quantity"), "instructions"';
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
    console.log(`prompt: ${prompt}`);
    console.log("recipe creation completed...");
    return recipe;
  } catch (error) {
    console.error("Error parsing recipe:", error);
    return { error: "Unable to parse recipe as JSON" };
  }
}
// export async function createImage() {
//   const endpointUrl = "https://image.octoai.run/generate/sdxl";
//   const modifiedPrompt = `In the center of the bar, illuminated by a spotlight emanating from the ceiling, sits a masterpiece of cocktail. A crystal coupe glass cradles a cocktail containing gin, lemon juice, simple syrup, orange bitters, and egg white. A liquor bottle of gin next to cocktail.Utilizing photorealistic and hyper-detailed style to capture the rich textures and vibrant colors of the scene. Additionally emphasize the interplay of light and shadow, creating a sense of drama and intrigue.`;
//   const inputs = {
//     prompt: modifiedPrompt,
//     negative_prompt:
//       "Blurry photo, distortion, low-res, poor quality, multiple cocktail glasses",
//     width: 832,
//     height: 1216,
//     num_images: 1,
//     sampler: "DDIM",
//     steps: 30,
//     cfg_scale: 12,
//     use_refiner: true,
//     high_noise_frac: 0.8,
//     style_preset: "Watercolor",
//   };

//   try {
//     const outputs = await client.infer(endpointUrl, inputs);

//     if (response.error) {
//       throw new Error(`Error from OctoAI: ${response.error}`);
//     }

//     const imageResponse = outputs.images[0];
//     const imageData = imageResponse.image_b64;
//     const imageUrl = `data:image/jpeg;base64,${imageData}`;

//     console.log("image creation completed");
//     return imageUrl;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     return { error: "Unable to generate image" };
//   }
// }

// generate image using OctoAI - Stable Diffusion XL

//upload image to supabase storage

//create new blog post in supabase
//   const { data: blog, error: blogError } = await supabase
//     .from("blogs")
//     .insert([
//       { title: "hello", content: recipe, imageUrl: "imgage", userId: "123" },
//     ])
//     .select();

//   if (blogError) {
//     return { error: "Unable to insert the blog into the database." };
//   }

//   const blogId = blog?.[0]?.id;

//   revalidatePath("/");
//   redirect(`/blog/${blogId}`);
