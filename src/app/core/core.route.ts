namespace app.core {
	'use strict';

	angular
		.module('app.core')
		.config(configureStates);

	/* @ngInject */
	function configureStates ($stateProvider: ng.ui.IStateProvider,
								$urlRouterProvider: angular.ui.IUrlRouterProvider) {

		$urlRouterProvider.otherwise('/404');

		_.forEach( getStates(), state => $stateProvider.state(state.state, state.config));
	}

	function getStates () {
		return [
			{
				state: '404',
				config: {
					url: '/404',
					templateUrl: 'app/core/404.html',
					title: '404'
				}
			}
		];
	}
}
