// 1. Importamos defineCollection normalmente
import { defineCollection } from "astro:content";
// 2. Importamos la 'z' desde su nueva ubicación
import { z } from "astro/zod"; 

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  postCollection,
};