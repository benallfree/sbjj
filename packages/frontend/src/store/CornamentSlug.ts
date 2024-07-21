import { z } from 'zod'

export const CornamentSlug = z.string()
export type CornamentSlug = z.infer<typeof CornamentSlug>
