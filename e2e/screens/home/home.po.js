/*
 * This file uses the Page Object pattern to define the main page for tests.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

'use strict';

var Home = function () {
	this.title = element(by.css('h1'));
};

module.exports = new Home();
