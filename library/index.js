'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var patternplate = _asyncToGenerator(function* (args) {
	var options = (0, _lodashMerge2['default'])({}, defaults, args);

	var patternplate = yield (0, _boilerplateServer2['default'])({
		name: 'patternplate',
		mode: options.mode,
		cwd: (0, _findRoot2['default'])(__dirname)
	});

	var patternplateServerInstance = yield (0, _patternplateServer2['default'])((0, _lodashMerge2['default'])(options['patternplate-server'], {
		mode: options.mode,
		patterncwd: process.cwd()
	}));

	var patternplateClientInstance = yield (0, _patternplateClient2['default'])((0, _lodashMerge2['default'])(options['patternplate-client'], {
		mode: options.mode,
		env: options['patternplate-client'].env || 'production'
	}));

	patternplate.log.info('Running in mode ' + patternplateServerInstance.runtime.mode + '...');

	if (patternplateServerInstance.runtime.mode === 'server') {
		patternplate.mount(patternplateClientInstance);
		patternplate.mount(patternplateServerInstance, '/api');
		patternplateClientInstance.configuration.client.path = patternplateServerInstance.runtime.prefix;

		patternplateClientInstance.log.warn('Changing patternplate-client.client.path to ' + patternplateServerInstance.runtime.prefix);
	} else {
		patternplate.log.info('Skipping mounts, not in mode server.');
	}

	patternplate.server = patternplateServerInstance;
	return patternplate;
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

var _lodashMerge = require('lodash.merge');

var _lodashMerge2 = _interopRequireDefault(_lodashMerge);

var _findRoot = require('find-root');

var _findRoot2 = _interopRequireDefault(_findRoot);

var _boilerplateServer = require('boilerplate-server');

var _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

var _patternplateServer = require('patternplate-server');

var _patternplateServer2 = _interopRequireDefault(_patternplateServer);

var _patternplateClient = require('patternplate-client');

var _patternplateClient2 = _interopRequireDefault(_patternplateClient);

var defaults = {
	'patternplate-server': {},
	'patternplate-client': {},
	'patternplate': {}
};

exports['default'] = patternplate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQWFlLFlBQVkscUJBQTNCLFdBQTRCLElBQUksRUFBRTtBQUNqQyxLQUFNLE9BQU8sR0FBRyw4QkFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUUxQyxLQUFNLFlBQVksR0FBRyxNQUFNLG9DQUFZO0FBQ3RDLE1BQUksRUFBRSxjQUFjO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsSUFBSTtBQUNsQixLQUFHLEVBQUUsMkJBQVMsU0FBUyxDQUFDO0VBQ3hCLENBQUMsQ0FBQzs7QUFFSCxLQUFNLDBCQUEwQixHQUFHLE1BQU0scUNBQ3hDLDhCQUFNLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuQztBQUNDLE1BQUksRUFBRSxPQUFPLENBQUMsSUFBSTtBQUNsQixZQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtFQUN6QixDQUNELENBQUMsQ0FBQzs7QUFFSixLQUFNLDBCQUEwQixHQUFHLE1BQU0scUNBQ3hDLDhCQUFNLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuQztBQUNDLE1BQUksRUFBRSxPQUFPLENBQUMsSUFBSTtBQUNsQixLQUFHLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxJQUFJLFlBQVk7RUFDdkQsQ0FDRixDQUFDLENBQUM7O0FBRUgsYUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHNCQUFvQiwwQkFBMEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxTQUFNLENBQUM7O0FBRXZGLEtBQUksMEJBQTBCLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDekQsY0FBWSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQy9DLGNBQVksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsNEJBQTBCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7QUFFakcsNEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksa0RBQWdELDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUcsQ0FBQztFQUNoSSxNQUFNO0FBQ04sY0FBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHdDQUF3QyxDQUFDO0VBQzlEOztBQUVELGFBQVksQ0FBQyxNQUFNLEdBQUcsMEJBQTBCLENBQUM7QUFDakQsUUFBTyxZQUFZLENBQUM7Q0FDcEI7Ozs7OzsyQkFwRGlCLGNBQWM7Ozs7d0JBQ1gsV0FBVzs7OztpQ0FFUixvQkFBb0I7Ozs7a0NBQ2IscUJBQXFCOzs7O2tDQUNyQixxQkFBcUI7Ozs7QUFFcEQsSUFBTSxRQUFRLEdBQUc7QUFDaEIsc0JBQXFCLEVBQUUsRUFBRTtBQUN6QixzQkFBcUIsRUFBRSxFQUFFO0FBQ3pCLGVBQWMsRUFBRSxFQUFFO0NBQ2xCLENBQUM7O3FCQTJDYSxZQUFZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgZmluZFJvb3QgZnJvbSAnZmluZC1yb290JztcblxuaW1wb3J0IGJvaWxlcnBsYXRlIGZyb20gJ2JvaWxlcnBsYXRlLXNlcnZlcic7XG5pbXBvcnQgcGF0dGVybnBsYXRlU2VydmVyIGZyb20gJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXInO1xuaW1wb3J0IHBhdHRlcm5wbGF0ZUNsaWVudCBmcm9tICdwYXR0ZXJucGxhdGUtY2xpZW50JztcblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cdCdwYXR0ZXJucGxhdGUtc2VydmVyJzoge30sXG5cdCdwYXR0ZXJucGxhdGUtY2xpZW50Jzoge30sXG5cdCdwYXR0ZXJucGxhdGUnOiB7fVxufTtcblxuYXN5bmMgZnVuY3Rpb24gcGF0dGVybnBsYXRlKGFyZ3MpIHtcblx0Y29uc3Qgb3B0aW9ucyA9IG1lcmdlKHt9LCBkZWZhdWx0cywgYXJncyk7XG5cblx0Y29uc3QgcGF0dGVybnBsYXRlID0gYXdhaXQgYm9pbGVycGxhdGUoe1xuXHRcdG5hbWU6ICdwYXR0ZXJucGxhdGUnLFxuXHRcdG1vZGU6IG9wdGlvbnMubW9kZSxcblx0XHRjd2Q6IGZpbmRSb290KF9fZGlybmFtZSlcblx0fSk7XG5cblx0Y29uc3QgcGF0dGVybnBsYXRlU2VydmVySW5zdGFuY2UgPSBhd2FpdCBwYXR0ZXJucGxhdGVTZXJ2ZXIoXG5cdFx0bWVyZ2Uob3B0aW9uc1sncGF0dGVybnBsYXRlLXNlcnZlciddLFxuXHRcdFx0e1xuXHRcdFx0XHRtb2RlOiBvcHRpb25zLm1vZGUsXG5cdFx0XHRcdHBhdHRlcm5jd2Q6IHByb2Nlc3MuY3dkKClcblx0XHRcdH1cblx0XHQpKTtcblxuXHRjb25zdCBwYXR0ZXJucGxhdGVDbGllbnRJbnN0YW5jZSA9IGF3YWl0IHBhdHRlcm5wbGF0ZUNsaWVudChcblx0XHRtZXJnZShvcHRpb25zWydwYXR0ZXJucGxhdGUtY2xpZW50J10sXG5cdFx0XHR7XG5cdFx0XHRcdG1vZGU6IG9wdGlvbnMubW9kZSxcblx0XHRcdFx0ZW52OiBvcHRpb25zWydwYXR0ZXJucGxhdGUtY2xpZW50J10uZW52IHx8ICdwcm9kdWN0aW9uJ1xuXHRcdFx0fVxuXHQpKTtcblxuXHRwYXR0ZXJucGxhdGUubG9nLmluZm8oYFJ1bm5pbmcgaW4gbW9kZSAke3BhdHRlcm5wbGF0ZVNlcnZlckluc3RhbmNlLnJ1bnRpbWUubW9kZX0uLi5gKTtcblxuXHRpZiAocGF0dGVybnBsYXRlU2VydmVySW5zdGFuY2UucnVudGltZS5tb2RlID09PSAnc2VydmVyJykge1xuXHRcdHBhdHRlcm5wbGF0ZS5tb3VudChwYXR0ZXJucGxhdGVDbGllbnRJbnN0YW5jZSk7XG5cdFx0cGF0dGVybnBsYXRlLm1vdW50KHBhdHRlcm5wbGF0ZVNlcnZlckluc3RhbmNlLCAnL2FwaScpO1xuXHRcdHBhdHRlcm5wbGF0ZUNsaWVudEluc3RhbmNlLmNvbmZpZ3VyYXRpb24uY2xpZW50LnBhdGggPSBwYXR0ZXJucGxhdGVTZXJ2ZXJJbnN0YW5jZS5ydW50aW1lLnByZWZpeDtcblxuXHRcdHBhdHRlcm5wbGF0ZUNsaWVudEluc3RhbmNlLmxvZy53YXJuKGBDaGFuZ2luZyBwYXR0ZXJucGxhdGUtY2xpZW50LmNsaWVudC5wYXRoIHRvICR7cGF0dGVybnBsYXRlU2VydmVySW5zdGFuY2UucnVudGltZS5wcmVmaXh9YCk7XG5cdH0gZWxzZSB7XG5cdFx0cGF0dGVybnBsYXRlLmxvZy5pbmZvKGBTa2lwcGluZyBtb3VudHMsIG5vdCBpbiBtb2RlIHNlcnZlci5gKTtcblx0fVxuXG5cdHBhdHRlcm5wbGF0ZS5zZXJ2ZXIgPSBwYXR0ZXJucGxhdGVTZXJ2ZXJJbnN0YW5jZTtcblx0cmV0dXJuIHBhdHRlcm5wbGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGF0dGVybnBsYXRlO1xuIl19