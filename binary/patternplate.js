#!/usr/bin/env node
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var main = _asyncToGenerator(function* () {
	var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	var application = yield (0, _2['default'])(_extends({}, options, {
		mode: 'server'
	}));

	yield application.start();
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var args = (0, _minimist2['default'])(process.argv.slice(1));

main(args)['catch'](function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvcGF0dGVybnBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFPZSxJQUFJLHFCQUFuQixhQUFrQztLQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDL0IsS0FBTSxXQUFXLEdBQUcsTUFBTSxnQ0FDdEIsT0FBTztBQUNWLE1BQUksRUFBRSxRQUFRO0lBQ2IsQ0FBQzs7QUFFSCxPQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7Ozs7O1FBWk0sZ0JBQWdCOzt3QkFDRixVQUFVOzs7O2dCQUVOLEtBQUs7Ozs7QUFXOUIsSUFBTSxJQUFJLEdBQUcsMkJBQVMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUNILENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDYixXQUFVLENBQUMsWUFBTTtBQUNoQixRQUFNLEdBQUcsQ0FBQztFQUNWLENBQUMsQ0FBQztDQUNILENBQUMsQ0FBQzs7O0FBR0osT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUs7QUFDckQsUUFBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlFLE9BQU0sTUFBTSxDQUFDO0NBQ2IsQ0FBQyxDQUFDIiwiZmlsZSI6InBhdHRlcm5wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBtaW5pbWlzdCBmcm9tICdtaW5pbWlzdCc7XG5cbmltcG9ydCBwYXR0ZXJucGxhdGUgZnJvbSAnLi4vJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbihvcHRpb25zID0ge30pIHtcblx0Y29uc3QgYXBwbGljYXRpb24gPSBhd2FpdCBwYXR0ZXJucGxhdGUoe1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0bW9kZTogJ3NlcnZlcidcblx0fSk7XG5cblx0YXdhaXQgYXBwbGljYXRpb24uc3RhcnQoKTtcbn1cblxuY29uc3QgYXJncyA9IG1pbmltaXN0KHByb2Nlc3MuYXJndi5zbGljZSgxKSk7XG5cbm1haW4oYXJncylcblx0LmNhdGNoKGVyciA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdH0pO1xuXG4vLyBDYXRjaCB1bmhhbmRsZWQgcmVqZWN0aW9ucyBnbG9iYWxseVxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcHJvbWlzZSkgPT4ge1xuXHRjb25zb2xlLmxvZygnVW5oYW5kbGVkIFJlamVjdGlvbiBhdDogUHJvbWlzZSAnLCBwcm9taXNlLCAnIHJlYXNvbjogJywgcmVhc29uKTtcblx0dGhyb3cgcmVhc29uO1xufSk7XG4iXX0=