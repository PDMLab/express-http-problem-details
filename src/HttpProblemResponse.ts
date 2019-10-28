import express from 'express'
import { NextFunction } from 'connect'
import { ErrorRequestHandler } from 'express-serve-static-core'
import { IMappingStrategy } from 'http-problem-details-mapper'

class HttpProblemResponseOptions {
  public strategy: IMappingStrategy;
}

function HttpProblemResponse (options: HttpProblemResponseOptions): ErrorRequestHandler {
  const { strategy } = options

  return function HttpProblemDetailsMiddleware (error: Error,
    request: express.Request,
    response: express.Response,
    next: NextFunction): void { // eslint-disable-line @typescript-eslint/no-unused-vars
    let problem = strategy.map(error)
    if (!problem.detail && error.message) {
      problem.detail = error.message
    }

    response.statusCode = problem.status
    response.setHeader('Content-Type', 'application/problem+json')
    response.send(JSON.stringify(problem))
  }
}

export { HttpProblemResponse }
