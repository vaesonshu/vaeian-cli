const { promisify } = require('util')
const inquirer = require('inquirer')
const download = promisify(require('download-git-repo')) // 转为Promise
const open = require('open')
const path = require('path')
const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')
const config = require('../config/repo-config')
const downloadFun = require('./download')
const createProjectAction = async (project) => {
  // 命令行的执行逻辑代码
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      choices: config.template,
      message: 'choose your tempalte'
    }
  ])
  // 1. 下载代码模板
  downloadFun(config.templateUrl[answer.template], project)

  // // 2. 执行npm install
  // const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  // await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // // 3. 运行
  // await commandSpawn(command, ['run', 'dev'], { cwd: `./${project}` })

  // 4. 打开浏览器
  // open('http://localhost:8080')

}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1. 编译ejs模板
  const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
  console.log(result)

  // 将result写入.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  console.log('targetPath', targetPath)
  writeToFile(targetPath, result)
  // 放到对应的文件夹中
}


module.exports = {
  createProjectAction,
  addComponentAction
}