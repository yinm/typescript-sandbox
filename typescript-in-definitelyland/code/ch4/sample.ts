import * as fs from 'fs'

interface Config {
  filePath?: string | null
  verbose?: boolean
}

let config: Config = {}
config.filePath = 'settings.json'
config.verbose = false
processA(config)

function processA(config: Config = {}) {
  if (fs.existsSync(config.filePath!)) {
    console.log(fs.readFileSync(config.filePath!, 'utf8'))
  }
}

function processB(config: Config = {}) {
  config.filePath = config.filePath || 'settings.json'
  config.verbose = config.verbose || false

  if (fs.existsSync(config.filePath)) {
    console.log(fs.readFileSync(config.filePath, 'utf8'))
  }

  processA(config)
}

interface ConfigFixed {
  filePath: string
  verbose: boolean
}

function processC(config: Config = {}) {
  const fixed: ConfigFixed = {
    filePath: config.filePath || 'settings.json',
    verbose: config.verbose || false
  }

  if (fs.existsSync(fixed.filePath)) {
    console.log(fs.readFileSync(fixed.filePath, 'utf8'))
  }
}

export { Config, processB, processC }
