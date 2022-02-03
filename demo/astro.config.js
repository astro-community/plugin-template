// @ts-check

import { myPlugin } from '@example/my-plugin'

/** @type {import('astro').AstroUserConfig} */
const config = {
	renderers: [],
	vite: {
		plugins: [
			myPlugin()
		]
	}
}

export default config
