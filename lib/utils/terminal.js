/**
 * 执行终端命令相关的代码
 */
const { spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    // 进程中会有很多执行命令的过程中的打印信息
    const childProcess = spawn(...args)
    // 把childProcess进程中的信息放到当前进程中
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => {
      resolve()
    })
  })
}
module.exports = {
  commandSpawn
}