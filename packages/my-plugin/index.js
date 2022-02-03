// @ts-check

/** @type {{ (options?: Record<string, any>): import('vite').Plugin }} */
export const myPlugin = (options) => {
	void options

	return {
		name: '@example/my-plugin',
		// optional hooks

		// // https://vitejs.dev/guide/api-plugin.html#configresolved
		// configResolved(resolvedConfig) {},

		// // https://rollupjs.org/guide/en/#resolveid
		// resolveId(importee, importer, options, isSSR) {
		// 	return undefined
		// },

		// // https://vitejs.dev/guide/api-plugin.html#configureserver
		// configureServer(server) {},

		// // https://rollupjs.org/guide/en/#load
		// load(importee, isSSR) {
		// 	return undefined
		// },

		// // https://rollupjs.org/guide/en/#transform
		// transform(code, importee, isSSR) {
		// 	return undefined
		// },

		// // https://rollupjs.org/guide/en/#buildstart
		// buildStart() {},

		// // https://rollupjs.org/guide/en/#buildend
		// buildEnd() {}
	}
}
