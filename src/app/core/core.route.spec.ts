describe('app/core/core.route', () => {

	let $location: angular.ILocationService;

	beforeEach(() => {
		angular.mock.module('app');
		inject((_$location_: angular.ILocationService) => $location = _$location_);
	});

	describe('/404', () => {

		describe('when some non existent url', () => {

			it('should go to 404 state', () => {
				$location.path('/someNonExistentUrl');
				expect($location.url()).toEqual('/404');
			});
		});
	});
});
