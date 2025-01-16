import { z } from "zod";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>