import 'dotenv/config'

export interface Config {
  environment: string
  port: number
}

const config: Config = {
  environment: process.env['ENVIRONMENT'] || 'development',
  port: parseInt(process.env['PORT'] || '') || 80,
}

export default config
