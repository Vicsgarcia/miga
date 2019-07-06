const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/miga-api'

mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.info('Miga Connected'))
.catch(error => console.error('Not connected', error))