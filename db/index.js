import mongoose from 'mongoose'
import config from '../config.js'

export const createDBConnection = async () => {
  const DATABASE_URI = config.mongodbURI
  try {
    const db = await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database is connected to:', db.connection.name)
  } catch (error) {
    console.log(error)
  }
}
