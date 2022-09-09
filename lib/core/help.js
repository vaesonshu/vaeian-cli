const program = require('commander')

const helpOptions = () => {
  // 增加options
  program.option('-w, --how', 'a vaeian cli')
  program.option('-f, --framework  <framework>', 'your framework')
}

module.exports = {
  helpOptions
}