
require('dotenv').config();
import express from 'express'

const coordinate = require('./routes/coordinate')

const port = process.env.PORT

const app = express();
app.use(express.json())


app.use(coordinate)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🌛 API server listening on port: ${port}`)
  })
}

// Export express app
module.exports = app
