const { flatRoutes } = require('remix-flat-routes')

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	cacheDirectory: './node_modules/.cache/remix',
	ignoredRouteFiles: ['**/*'],
	routes: async defineRoutes => {
		return flatRoutes('routes', defineRoutes, {
			ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
		})
	},
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_routeConvention: true,
		unstable_cssModules: true,
		unstable_cssSideEffectImports: true,
		unstable_vanillaExtract: true,
	},
}
