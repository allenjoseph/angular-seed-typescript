namespace app.core {
	'use strict';

	export class configuration {

		/* @ngInject */
		constructor (
			$stateProvider: ng.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider) {

			$urlRouterProvider.otherwise('/404');

			_.forEach( app.core.states, state => $stateProvider.state(state.state, state.config));
		}
	}
}
