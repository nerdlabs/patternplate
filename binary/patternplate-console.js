#!/usr/bin/env node
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var start = _asyncToGenerator(function* (options) {
	var mode = 'console';
	var settings = _extends({}, options, { mode: mode });

	var _settings$_ = _slicedToArray(settings._, 2);

	var command = _settings$_[1];

	var application = yield (0, _2['default'])(settings);
	yield application.server.run(command, settings);
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var args = (0, _minimist2['default'])(process.argv.slice(1));

start(args)['catch'](function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvcGF0dGVybnBsYXRlLWNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBT2UsS0FBSyxxQkFBcEIsV0FBcUIsT0FBTyxFQUFFO0FBQzdCLEtBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN2QixLQUFNLFFBQVEsZ0JBQU8sT0FBTyxJQUFFLElBQUksRUFBSixJQUFJLEdBQUMsQ0FBQzs7a0NBQ1gsUUFBUSxDQUExQixDQUFDOztLQUFLLE9BQU87O0FBQ3BCLEtBQU0sV0FBVyxHQUFHLE1BQU0sbUJBQWEsUUFBUSxDQUFDLENBQUM7QUFDakQsT0FBTSxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDaEQ7Ozs7OztRQVhNLGdCQUFnQjs7d0JBQ0YsVUFBVTs7OztnQkFFTixLQUFLOzs7O0FBVTlCLElBQU0sSUFBSSxHQUFHLDJCQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FDSixDQUFDLFVBQUEsR0FBRyxFQUFJO0FBQ2IsV0FBVSxDQUFDLFlBQU07QUFDaEIsUUFBTSxHQUFHLENBQUM7RUFDVixDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUM7OztBQUdKLE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFLO0FBQ3JELFFBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RSxPQUFNLE1BQU0sQ0FBQztDQUNiLENBQUMsQ0FBQyIsImZpbGUiOiJwYXR0ZXJucGxhdGUtY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBtaW5pbWlzdCBmcm9tICdtaW5pbWlzdCc7XG5cbmltcG9ydCBwYXR0ZXJucGxhdGUgZnJvbSAnLi4vJztcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQob3B0aW9ucykge1xuXHRjb25zdCBtb2RlID0gJ2NvbnNvbGUnO1xuXHRjb25zdCBzZXR0aW5ncyA9IHsuLi5vcHRpb25zLCBtb2RlfTtcblx0Y29uc3Qge186IFssIGNvbW1hbmRdfSA9IHNldHRpbmdzO1xuXHRjb25zdCBhcHBsaWNhdGlvbiA9IGF3YWl0IHBhdHRlcm5wbGF0ZShzZXR0aW5ncyk7XG5cdGF3YWl0IGFwcGxpY2F0aW9uLnNlcnZlci5ydW4oY29tbWFuZCwgc2V0dGluZ3MpO1xufVxuXG5jb25zdCBhcmdzID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDEpKTtcblxuc3RhcnQoYXJncylcblx0LmNhdGNoKGVyciA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdH0pO1xuXG4vLyBDYXRjaCB1bmhhbmRsZWQgcmVqZWN0aW9ucyBnbG9iYWxseVxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcHJvbWlzZSkgPT4ge1xuXHRjb25zb2xlLmxvZygnVW5oYW5kbGVkIFJlamVjdGlvbiBhdDogUHJvbWlzZSAnLCBwcm9taXNlLCAnIHJlYXNvbjogJywgcmVhc29uKTtcblx0dGhyb3cgcmVhc29uO1xufSk7XG4iXX0=