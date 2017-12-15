'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = require('preact');

var _preactRouter = require('preact-router');

var _preactRouter2 = _interopRequireDefault(_preactRouter);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return (0, _preact.h)(
		_preactRouter2.default,
		null,
		(0, _preact.h)(_app2.default, { path: '/' }),
		(0, _preact.h)(_about2.default, { path: '/about' })
	);
};