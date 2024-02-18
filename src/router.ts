import express from 'express'

import type {Router, Request, Response, NextFunction} from 'express'

const router: Router = express.Router()

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(request)
  console.log(response)

  next()
})

export default router
