import PocketBase, { type RecordModel } from 'pocketbase'
import type { JsonValue } from 'type-fest'
import type { PageServerLoad } from './$types'

export type SettingsModel = RecordModel & { name: string; value: JsonValue }

const load: PageServerLoad = async ({ parent }) => {
  const { meta } = await parent()
  const client = new PocketBase(meta.pocketbase.endpoint)
  const slugs = meta.plans.tiers.map((tier) => tier.slug)
  const counts = await client
    .collection('settings')
    .getFullList<SettingsModel>({
      filter: slugs.map((slug) => `name = "${slug}-sold-count"`).join(' || '),
    })
  const soldCounts = slugs.reduce(
    (carry, slug) => {
      const count =
        (counts.find((count) => count.name === `${slug}-sold-count`)
          ?.value as number) || 0
      carry[slug] = count
      return carry
    },
    {} as { [_: string]: number },
  )
  return {
    soldCounts,
  }
}

export { load }
