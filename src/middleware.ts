import express from 'express'

import type {Router, Request, Response, NextFunction} from 'express'

const middleware: Router = express.Router()

middleware.use((request: Request, response: Response, next: NextFunction) => {
  console.log(request)
  console.log(response)

  next()
})

export default middleware
