interface Config {
  filePath?: string | null
  verbose?: boolean
}

interface ConfigFixed {
  filePath: string
  verbose: boolean
}

let config: Config = {
  verbose: true
}

let defaultConfig: ConfigFixed = { filePath: 'settings.json', verbose: false }
let filled = Object.assign({}, defaultConfig, config)

let fixed: ConfigFixed = filled
console.log(fixed)

export { ConfigFixed, fixed }
