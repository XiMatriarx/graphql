import express from 'express'
import cors from 'cors'

import config from './config.js'
import middleware from './middleware.js'
import router from './router.js'
import graphql from './graphql.js'

const server = express()

server.use(cors())
server.use(express.json())
server.use(middleware)
server.use(router)
server.use(graphql)

server.listen(config.port)
