const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const downloadFun = function (url, project) {
  const spinner = ora().start()
  spinner.text = chalk.blue('the code is being downloaded...')
  download('direct:' + url, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed(chalk.green('code download was successful!'))
      console.log(chalk.yellow('Done! ') + chalk.yellow('you run:'))
      console.log(chalk.cyanBright('cd ' + project))
      console.log(chalk.magentaBright('npm install'))
      console.log(chalk.magentaBright('npm run dev'))
    } else {
      spinner.fail('code download failed')
    }
  })
}
module.exports = downloadFun