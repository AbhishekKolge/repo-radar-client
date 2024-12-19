import { z } from 'zod';

const envSchema = z.object({
  VITE_GITHUB_LOGIN_URL: z.string().trim().url(),
  VITE_ENV: z.enum(['development', 'production', 'staging']).default('development'),
  VITE_BASE_URL: z.string().trim().url(),
  VITE_GRAPHQL_URL: z.string().trim().url(),
  VITE_ACCESS_TOKEN_EXPIRATION_TIME: z.coerce
    .number()
    .int()
    .min(0, 'Expiration time must be a positive integer'),
  VITE_TIME_BUFFER: z.coerce.number().int().min(0, 'Time buffer must be a positive integer'),
});

export const env = envSchema.parse(import.meta.env);
export const isProduction = (env.VITE_ENV === 'production') as boolean;
