'use strict';

var _preact = require('preact');

var _preact2 = require('unistore/preact');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.getElementById('root');

var store = (0, _store2.default)(window.__STATE__);

(0, _preact.render)((0, _preact.h)(
	_preact2.Provider,
	{ store: store },
	(0, _preact.h)(_router2.default, null)
), root, root.lastChild);