#!/usr/bin/env node

const program = require('commander')

const { helpOptions } = require('./lib/core/help')
const { createCommands } = require('./lib/core/create')

// 获取版本号
program.version(require('./package.json').version)

// 帮助和可选信息
helpOptions()

// 创建其他的指令
createCommands()

program.parse(process.argv)


