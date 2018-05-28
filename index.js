import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import passport from 'passport'
import routes from './src/index'
import configPassport from './src/auth/passport'
import { config } from 'dotenv'
config()

const app = express()
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '127.0.0.1'

configPassport(passport)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())

routes(app)

mongoose.connect(process.env.MONGO_CONECT)

app.listen(PORT, HOST, () => console.log(`Express has been started at ${HOST}:${PORT}`))