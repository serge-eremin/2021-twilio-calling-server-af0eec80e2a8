const config = require( './app' )
module.exports = {
  development: {
    username: config.get( 'db.user' ),
    password: config.get( 'db.pass' ),
    database: config.get( 'db.name' ),
    host: config.get( 'db.settings.host' ),
    dialect: 'mysql',
    seederStorage: 'json',
    seederStoragePath: './sequelizeData.json',
    migrationStorage: 'json',
    migrationStoragePath: './sequelizeMeta.json'
  },
  staging: {
    username: config.get( 'db.user' ),
    password: config.get( 'db.pass' ),
    database: config.get( 'db.name' ),
    host: config.get( 'db.settings.host' ),
    dialect: 'mysql',
    seederStorage: 'json',
    seederStoragePath: './sequelizeData.json',
  },
  production: {
    username: 'root',
    password: 'null',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStorage: 'json',
    seederStoragePath: './sequelizeData.json',
    migrationStorage: 'json',
    migrationStoragePath: './sequelizeMeta.json'
  }
}