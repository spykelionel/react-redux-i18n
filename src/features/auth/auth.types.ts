import { z } from "zod";
// Define the schema for both login and registration
const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

export type AuthInputs = z.infer<typeof authSchema>;
