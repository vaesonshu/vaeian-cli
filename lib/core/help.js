const program = require('commander')

const helpOptions = () => {
  // 增加options
  program.option('-w, --how', 'a vaeian cli')
  program.option('-f, --framework  <framework>', 'your framework')
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components')
}

module.exports = {
  helpOptions
}