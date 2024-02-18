import express from 'express'
import {createHandler} from 'graphql-http/lib/use/express'
import {ruruHTML} from 'ruru/server'

import type {Router, Request, Response} from 'express'

import schema from './schema.js'
import {ping} from './endpoints/index.js'

const graphql: Router = express.Router()

const root = {
  ping,
}

graphql.all(
  '/graphql',
  createHandler({
    schema,
    rootValue: root,
  }),
)

graphql.get('/', (request: Request, response: Response) => {
  console.log(request)

  response.type('html')
  response.end(ruruHTML({endpoint: '/graphql'}))
})

export default graphql
