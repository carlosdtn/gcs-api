import { config } from 'dotenv'

config()

export default {
  mongodbURI: process.env.MONGODB_URI || 'mongodb://localhost/grapeapi',
  port: process.env.PORT || 3005
}
