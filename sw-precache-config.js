module.exports = {
	staticFileGlobs: [
    'bower_components/webcomponentsjs/webcomponents-loader.js',
    'images/*',
    'manifest.json',
  ],
	runtimeCaching: [
		{
			urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
			handler: 'fastest',
			options: {
				cache: {
					name: 'webcomponentsjs-polyfills-cache',
				},
			},
    },
  ],
};
