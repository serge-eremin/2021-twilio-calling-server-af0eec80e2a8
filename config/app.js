const convict = require('convict')

const config = convict({
  app: {
    name: {
      doc: 'Test Application',
      format: String,
      default: 'Test Application'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 5000,
    env: 'port'
  },
  namespace: {
    doc: '',
    format: String,
    default: 'v1',
    env: 'NAMESPACE'
  },
  logs: {
    directory: {
      doc: 'Directory where logs found',
      format: String,
      default: 'logs',
      env: 'LOG_DIRECTORY'
    },
    level: {
      doc: 'level of log',
      format: String,
      default: 'debug',
      env: 'LOG_LEVEL'
    },
  },
  twilio: {
    format: Object,
    default: {
      accountSid: 'ACa32280176ed2a573939f00f096809bbe',
      authToken: '87279a20e481332d9fd76fca23ad0411',
      callbackURL: 'https://23b48fb99a2f.ngrok.io ',
      applicationSid: 'AP3aa73a0b96e38562155869223bd025aa',
    },
  },
  devices: {
    default: {
      device1: '01234567890987654321', // Put Device name here
    },
  }
})

const env = config.get('env')
const envFilePath = `./environment/${env}.json`

config.loadFile(envFilePath)

config.validate({ allowed: 'strict' })

module.exports = config
