'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.actions = undefined;

var _unistore = require('unistore');

var _unistore2 = _interopRequireDefault(_unistore);

var _preact = require('unistore/preact');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = exports.actions = function actions(store) {
	return {
		increment: function increment(state) {
			return { count: state.count + 1 };
		}
	};
};

exports.default = function (initialState) {
	return (0, _unistore2.default)(initialState);
};