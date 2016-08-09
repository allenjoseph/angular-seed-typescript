describe('app/dashboard/dashboard.routes.ts', () => {

	let $location: any, $state: any, $rootScope: any;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(( _$location_: any,
						_$state_: any,
						_$rootScope_: any) => {

		$location = _$location_;
		$state = _$state_;
		$rootScope = _$rootScope_;

	}));

	describe('when url not exists', () => {

		it('should go to dashboard home', () => {

			$location.path('/someNonExistentUrl');
			$rootScope.$digest();

			expect($location.url()).toEqual('/home');
		});
	});
});
