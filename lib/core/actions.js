const { promisify } = require('util')
const download = promisify(require('download-git-repo')) // 转为Promise
const open = require('open')
const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const createProjectAction = async (project) => {
  console.log('creating your project...')
  // 1. clone模板
  await download(vueRepo, project, { clone: true })

  // 2. 执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3. 运行
  await commandSpawn(command, ['run', 'dev'], { cwd: `./${project}` })

  // 4. 打开浏览器
  // open('http://localhost:8080')

}


module.exports = {
  createProjectAction
}