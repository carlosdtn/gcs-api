export const corsOptions = (whitelist) => {
  return {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS.'))
      }
    }
  }
}
