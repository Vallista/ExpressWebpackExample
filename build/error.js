const chalk = require('chalk');

module.exports = (err, stats) => {
  if (err === null) return;
  
  console.log('');
  console.log(chalk.red(err));
  console.log('');
  
  console.log(chalk.red(stats.hasErrors()));
};