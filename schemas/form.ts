import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4, "Form name must be at least 4 characters long"),
  description: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
