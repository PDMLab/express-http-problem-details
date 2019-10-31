import express from 'express'
import { NextFunction } from 'connect'
import { ErrorRequestHandler } from 'express-serve-static-core'
import { IMappingStrategy } from 'http-problem-details-mapper'

interface HttpProblemResponseOptions {
  strategy: IMappingStrategy
}

function HttpProblemResponse (options: HttpProblemResponseOptions): ErrorRequestHandler {
  const { strategy } = options

  return function HttpProblemDetailsMiddleware (error: Error,
    request: express.Request,
    response: express.Response,
    next: NextFunction): void {
    const problem = strategy.map(error)

    if (!problem) {
      next(error)
      return
    }

    if (!problem.detail && error.message) {
      problem.detail = error.message
    }

    response.statusCode = problem.status
    response.setHeader('Content-Type', 'application/problem+json')
    response.send(JSON.stringify(problem))
  }
}

export { HttpProblemResponse }
