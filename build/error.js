const chalk = require('chalk');

module.exports = (err, stats) => {
  console.log('');
  console.log(chalk.red(err));
  console.log('');
  
  console.log(chalk.red(stats.hasErrors()));
};