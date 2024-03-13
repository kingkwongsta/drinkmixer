# Drink Mixer
Discover a world of exquisite cocktail recipes
### Live Site: https://drink-mixer.vercel.app/

- Create a cocktail recipe based on your preference with Generative AI

## Tech Stack

**Client**
- Next.js, Zustand, TailwindCSS, Shadcn

**Backend**

- Langchain to orchestrate an inference API call to Smaug 72B LLM for recipe generation
- React Server Action for text to image generation using Stable Diffusion XL with the [Paint Splash Style](https://civitai.com/models/140335/sdxl-paint-splash-style) LoRA
