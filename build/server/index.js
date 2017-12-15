'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _preact = require('preact');

var _preactRenderToString = require('preact-render-to-string');

var _preactRenderToString2 = _interopRequireDefault(_preactRenderToString);

var _preact2 = require('unistore/preact');

var _router = require('../src/router');

var _router2 = _interopRequireDefault(_router);

var _store = require('../src/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var JS = (0, _fs.readFileSync)(_path2.default.resolve('build/index.js'), 'utf-8');

var PORT = process.env.PORT || 3000;

var AppShell = function AppShell(html, state) {
	return '\n\t<html lang="en-US">\n\t\t<head>\n\t\t\t<meta charset="utf-8">\n\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t\t<title> Counter App! </title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="root">' + html + '</div>\n\t\t\t<script>window.__STATE__=' + JSON.stringify(state) + '</script>\n\t\t\t<script>' + JS + '</script>\n\t\t</body>\n\t</html>\n';
};

app.use('/build', _express2.default.static(_path2.default.resolve('build')));

app.get('**', function (req, res) {
	var store = (0, _store2.default)({ count: 0 });

	var state = store.getState();

	var html = (0, _preactRenderToString2.default)((0, _preact.h)(
		_preact2.Provider,
		{ store: store },
		(0, _preact.h)(_router2.default, null)
	));

	res.send(AppShell(html, state));
});

app.listen(PORT, function () {
	console.log('> Connected to PORT: ', PORT);
});