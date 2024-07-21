import { writable } from 'svelte/store'

export const flash = writable<{
  message: string
  type: 'success' | 'error'
} | null>(null)
