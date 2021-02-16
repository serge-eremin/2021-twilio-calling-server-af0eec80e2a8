import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import moment from 'moment-timezone'
import initRoutes from '../app/routes'

// Initialize express app
const app = express()
moment.tz.setDefault( 'America/Los_Angeles' )

function initMiddleware() {

  // Showing stack errors
  app.set('showStackError', true)

  // Enable jsonp
  app.enable('jsonp callback')

  app.use(function (req, res, next) {
    next()
  })

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(cors())

  app.use('/public', express.static('public') )
}

export function init() {
  // Initialize Express middleware
  initMiddleware()

  // Initialize modules server routes
  initRoutes(app)

  return app
}
