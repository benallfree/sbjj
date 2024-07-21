import { getDefaultHub } from '$src/pocketbase-client'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const hub = await getDefaultHub()

  return { hub }
}
