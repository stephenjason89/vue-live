const path = require('path')
const templates = require('./docs/templates')

module.exports = {
	componentsRoot: 'components',
	components: '**/[A-Z]*.vue',
	outDir: './docs/en',
	defaultExamples: true,
	getDestFile: (componentPath, config) => {
		return path.join(config.outDir, componentPath).replace(/\/\w+\.vue$/, '.md')
	},
	templates
}
