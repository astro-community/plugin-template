/** @type {import('vite').Plugin} */
export const myPlugin = (options) => {
	void options

	return {
		name: '@example/my-plugin',
		// optional hooks

		// https://vitejs.dev/guide/api-plugin.html#configresolved
		configResolved(resolvedConfig) {},

		// https://rollupjs.org/guide/en/#resolveid
		resolveId(importee, importer, options, isSSR) {},

		// https://vitejs.dev/guide/api-plugin.html#configureserver
		configureServer(server) {},

		// https://rollupjs.org/guide/en/#load
		load(importee, isSSR) {},

		// https://rollupjs.org/guide/en/#transform
		transform(code, importee, isSSR) {},
	}
}
