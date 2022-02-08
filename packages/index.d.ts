import type * as rollup from 'rollup'
import type * as vite from 'vite'

export interface PluginFactory {
	(options?: PluginOptions): Plugin
}

export interface PluginOptions {}

export interface Plugin
	extends Omit<
		vite.Plugin,
		'load' | 'resolveId' | 'resolveDynamicImport' | 'transform'
	> {
	resolveId?: {
		(
			this: rollup.PluginContext,
			importee: string,
			importer: string | undefined,
			options: {
				custom: rollup.CustomPluginOptions | undefined
				isEntry: boolean
			},
			isSSR: boolean
		): rollup.ResolveIdResult | Promise<rollup.ResolveIdResult | void> | void
	}

	resolveDynamicImport?: {
		(
			this: rollup.PluginContext,
			importee: string | rollup.AcornNode,
			importer: string
		): rollup.ResolveIdResult | Promise<rollup.ResolveIdResult | void> | void
	}

	load?: {
		(this: PluginContext, importee: string, isSSR: boolean):
			| rollup.LoadResult
			| Promise<rollup.LoadResult | void>
			| void
	}

	transform?: {
		(
			this: rollup.TransformPluginContext,
			code: string,
			importee: string,
			isSSR: boolean
		): rollup.TransformResult | Promise<rollup.TransformResult | void> | void
	}

	renderChunk?: {
		(
			this: rollup.PluginContext,
			code: string,
			chunk: rollup.RenderedChunk,
			options: rollup.NormalizedOutputOptions
		):
			| Promise<{ code: string; map?: SourceMapInput } | void>
			| { code: string; map?: SourceMapInput }
			| string
			| void
	}
}
