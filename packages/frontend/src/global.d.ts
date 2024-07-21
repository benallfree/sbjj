declare module '*.svg?dataurl' {
  const value: string
  export default value
}

declare module '*.svg?component' {
  import type { SvelteComponent } from 'svelte'
  const value: SvelteComponent
  export default value
}

declare module '*.svx' {
  import type { SvelteComponent } from 'svelte'
  const value: SvelteComponent
  export default value
}

// src/enhanced-images.d.ts
declare module '*.webp?enhanced' {
  const value: string
  export default value
}

declare module '*.png?enhanced' {
  const value: string
  export default value
}

declare module '*.jpg?enhanced' {
  const value: string
  export default value
}

declare module '*.jpeg?enhanced' {
  const value: string
  export default value
}

declare module '*.gif?enhanced' {
  const value: string
  export default value
}

declare module '*.svg?enhanced' {
  const value: string
  export default value
}
