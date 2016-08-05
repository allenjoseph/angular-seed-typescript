/// <reference path="../../typings/index.d.ts" />

namespace app {
	'use strict';

	let frameworks = ['ui.router', 'gettext'];

	let modules = ['app.additions'];

	angular
		.module('app', [...frameworks, ...modules])
		.config(app.core.routes);

}
