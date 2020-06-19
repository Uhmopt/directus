if (!process.env.API_URL && process.env.NODE_ENV === 'development') {
	console.log(`
⚠️   No API URL passed. Using the demo API as a fallback.
`);
}

module.exports = {
	lintOnSave: false,
	publicPath: process.env.NODE_ENV === 'production' ? '' : '/admin/',

	devServer: {
		allowedHosts: ['localhost', '.gitpod.io'],
		public: '127.0.0.1:8080',
		// proxy: {
		// 	'/': {
		// 		target: process.env.API_URL ? process.env.API_URL : 'https://demo.directus.io/',
		// 		changeOrigin: true
		// 	}
		// }
	},

	// There are so many chunks (from all the interfaces / layouts) that we need to make sure to not
	// prefetch them all. Prefetching them all will cause the server to apply rate limits in most cases
	chainWebpack: config => {
		config.plugins.delete('prefetch');

		if (process.env.NODE_ENV === 'development') {
			config.output.filename('[name].[hash].js').end();
		}

		// NOTE: This should be removed when we have main.js refactored to TypeScript
		config
			.entry('app')
			.clear()
			.add('./src/main.js')
			.end();
	}
};
