namespace app.dashboard {
	'use strict';

	export class Routes {

		/* @ngInject */
		constructor (
			$stateProvider: ng.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			_.forEach( states, elem => $stateProvider.state(elem.state, elem.config));
		}
	}
}
