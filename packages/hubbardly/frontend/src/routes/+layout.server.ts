import meta from '../meta.json'
import PocketBase, { type RecordModel } from 'pocketbase'
import type { JsonValue } from 'type-fest'
import type { PageServerLoad } from './$types'

const load: PageServerLoad = async ({ params }) => {
	const date = new Date()
	const publishDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

	return { meta, publishDate }
}

export { load }
