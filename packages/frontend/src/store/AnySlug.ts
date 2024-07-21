import { z } from 'zod'

export const AnySlug = z.string()
export type AnySlug = z.infer<typeof AnySlug>
