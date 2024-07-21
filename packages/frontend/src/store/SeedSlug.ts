import { z } from 'zod'

export const SeedSlug = z.string()
export type SeedSlug = z.infer<typeof SeedSlug>
