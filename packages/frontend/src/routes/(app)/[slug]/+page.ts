import { getHubBySlug } from '$src/pocketbase-client'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const hub = await getHubBySlug(params.slug)

  return { hub }
}

export const prerender = false
