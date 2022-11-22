import config from '../config.js'
import express from 'express'
import routes from '../routes/index.js'
import { createDBConnection } from '../db/index.js'
import cors from 'cors'
import { corsOptions } from '../utils/functions.js'
import { whitelist } from '../utils/constants.js'

class Server {
  constructor() {
    this.app = express()
    this.port = config.port || 3005
    this.middlewares()
    this.routes()
    this.dbConnection()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors(corsOptions(whitelist)))
  }

  routes() {
    this.app.use('/api/v1', routes)
  }

  async dbConnection() {
    createDBConnection()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server is up on port:', this.port)
    })
  }
}

export default Server
