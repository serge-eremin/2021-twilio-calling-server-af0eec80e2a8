import * as express from './server/express'
const port = 5000
import http from 'http'

const app = express.init()
const httpServer = http.Server( app )
httpServer.listen( port, () => console.log(`Server listening at http://localhost:${port}`))

// httpServer.listen( port, () => console.log( 'Server adept to recieve HTTP requests at ' ))

// app.listen( port, () => console.log(`Example app listening at http://localhost:${port}`) )