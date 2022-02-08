// @ts-check

/** @type {import('.').PluginFactory} */
export const myPlugin = (options) => {
	void options

	return {
		name: '@example/my-plugin',
		enforce: 'pre',

		// // https://vitejs.dev/guide/api-plugin.html#config
		// config(config, env) {},

		// // https://vitejs.dev/guide/api-plugin.html#configresolved
		// configResolved(resolvedConfig) {},

		// // https://rollupjs.org/guide/en/#options
		// options(options) {
		// 	return options
		// },

		// // https://vitejs.dev/guide/api-plugin.html#configureserver
		// configureServer(server) {},

		// // https://rollupjs.org/guide/en/#buildstart
		// buildStart() {},

		// // https://rollupjs.org/guide/en/#resolveid
		// resolveId(importee, importer, options, isSSR) {},

		// // https://rollupjs.org/guide/en/#resolvedynamicimport
		// resolveDynamicImport(importee, importer) {},

		// // https://rollupjs.org/guide/en/#load
		// load(importee, isSSR) {},

		// // https://rollupjs.org/guide/en/#transform
		// transform(code, importee, isSSR) {},

		// // https://rollupjs.org/guide/en/#moduleparsed
		// moduleParsed(info) {},

		// // https://rollupjs.org/guide/en/#renderchunk
		// renderChunk(code, chunk, options) {},

		// // https://rollupjs.org/guide/en/#generatebundle
		// generateBundle() {},

		// // https://rollupjs.org/guide/en/#writebundle
		// writeBundle() {},

		// // https://rollupjs.org/guide/en/#closebundle
		// closeBundle() {},

		// // https://rollupjs.org/guide/en/#buildend
		// buildEnd() {},
	}
}
