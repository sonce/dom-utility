var path = require('path');

var cdkit = require('cdkit');

var replaces = [
	{
		from: 'Dom-Utility',
		to: 'JS-Dom-Utility'
	},
	{
		from: 'dom-utility',
		to: 'js-dom-utility'
	}
];

function getFullPath(filename) {
	return path.join(__dirname, filename);
}

var map = [
	getFullPath('package.json'),
	getFullPath('README.md'),
	getFullPath('README.zh-CN.md'),
	getFullPath('jslib.json'),
	getFullPath('config/rollup.js'),
	getFullPath('test/browser/index.html'),
	getFullPath('demo/demo-global.html')
];

const config = [
	{
		root: '.',
		rules: [
			{
				test: function (pathname) {
					return map.some(function (u) {
						return pathname.indexOf(u) > -1;
					});
				},
				replace: replaces
			}
		]
	}
];

cdkit.run('replace', config);
