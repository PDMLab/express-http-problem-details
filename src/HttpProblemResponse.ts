import express, { Send } from 'express'
import { NextFunction } from 'connect'
import { Handler } from 'express-serve-static-core'
import { StatusCodeErrorMapper, IMappingStrategy, ErrorStatusCodes } from 'http-problem-details-mapper'

class HttpProblemResponseOptions {
  public strategy: IMappingStrategy;
}

function HttpProblemResponse (options: HttpProblemResponseOptions): Handler {
  return function HttpProblemDetailsMiddleware (request: express.Request,
    response: express.Response, next: NextFunction): void {
    const temp = response.send
    const strategy = options.strategy

    response.send = function (body): void {
      let problem = null
      let isErrorInstance = body instanceof Error

      if (body && isErrorInstance) {
        problem = strategy.map(body)
        response.statusCode = problem.status
      }

      if (!body && ErrorStatusCodes.includes(response.statusCode)) {
        problem = StatusCodeErrorMapper.mapStatusCode(response.statusCode)
      }

      if (problem) {
        response.setHeader('Content-Type', 'application/problem+json')
        temp.apply(this, [JSON.stringify(problem)])
      } else {
        temp.apply(this, [body])
      }
    } as Send

    return next()
  }
}

export { HttpProblemResponse }
