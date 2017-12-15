'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = require('preact');

var _preactRouter = require('preact-router');

var _preact2 = require('unistore/preact');

var _store = require('./store');

exports.default = (0, _preact2.connect)('count', _store.actions)(function (_ref) {
	var count = _ref.count,
	    increment = _ref.increment;
	return (0, _preact.h)(
		'div',
		null,
		(0, _preact.h)(
			'p',
			null,
			'Count: ',
			count
		),
		(0, _preact.h)(
			'button',
			{ onClick: increment },
			'Increment'
		),
		(0, _preact.h)(
			_preactRouter.Link,
			{ href: '/about' },
			' About Me! '
		)
	);
});