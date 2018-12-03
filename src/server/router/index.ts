import { Express, NextFunction, Request, Response } from 'express'
import render from '../controllers/render'
import apiRouter from './api'

export default (app: Express) => {
  app.use('/favicon.ico', (_, res) => res.status(200).send())
  app.use('/api', apiRouter)
  app.use('*', render)

  app.use((err: any, _req: Request, _res: Response, next: NextFunction) => {
    console.error(err.stack)
    next(err)
  })

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (req.xhr) {
      return res.status(err.status).send(err.message)
    }
    return next(err)
  })

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).send(err.message)
  })
}
