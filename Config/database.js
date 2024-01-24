import mongoose from 'mongoose'
import 'dotenv/config'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URI)

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
  })
