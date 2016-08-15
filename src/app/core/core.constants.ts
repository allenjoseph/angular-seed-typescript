namespace app.core {
	'use strict';

	// Do not remove the comments below, or change the values. It's the markers used by gulp build task to change the
	// value of the config constant when building the application, while removing the code below for all environments.

	// replace:environment
	let environment = {
		local: {
			debug: true,
			// REST backend configuration, used for all web services using restService
			server: {
				url: '',
				route: 'api'
			}
		},
		production: {
			debug: false,
			server: {
				url: '',
				route: 'api'
			}
		}
	};
	// endreplace

	/**
	 * Defines app-level configuration.
	 */
	export let config = {
		// Do not remove the comments below, or change the values. It's the markers used by gulp build task to inject app
		// version from package.json and environment values.

		// replace:constant
		version: 'dev',
		environment: environment.local,
		// endreplace

		// Supported languages
		supportedLanguages: [
			'en-US',
			'es-ES',
			'fr-FR'
		]
	};
}
