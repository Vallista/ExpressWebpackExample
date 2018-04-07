const semver = require('semver');
const chalk = require('chalk');
const packageConfig = require('./../package.json');

const versionRequirements = [
	{
		name: 'node',
		currentVersion: semver.clean(process.version),
		versionRequirement: packageConfig.engines.node,
	}
];

module.exports = () => {
	const warnings = [];
	
	versionRequirements.forEach((mod) => {
		if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
			warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
			);
		}
	});
	
	if (warnings.length) {
		console.log('');
		console.log(warnings.length === 1 ? chalk.yellow('이 모듈을 업데이트 해주세요.') : chalk.yellow('이 모듈들을 업데이트 해주세요.'));
		console.log('');

		for (let i = 0; i < warnings.length; i++) {
			const warning = warnings[i];
			console.log(' ' + warning);
		}

		console.log('');
		process.exit(1);
	}
	
};