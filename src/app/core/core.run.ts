namespace app.core {
	'use strict';

	export class Run {

		/* @ngInject */
		constructor(
			$rootScope: any) {

			$rootScope.$on('$stateChangeStart', (event, toState) => console.log('going to', toState.name));
		}
	}
}
