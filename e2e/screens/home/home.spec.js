'use strict';

describe('home screen', function () {

	var page;

	beforeEach(function () {
		browser.get('/');
		page = require('./home.po');
	});

	it('should include title with correct data', function () {
		expect(page.title.getText()).toMatch('Welcome');
	});

});
