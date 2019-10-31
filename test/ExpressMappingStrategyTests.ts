import 'should'
import { ExpressMappingStrategy } from '../src'
import { MapperRegistry } from 'http-problem-details-mapper'

describe('ExpressMappingStrategy', (): void => {
  describe('When mapping', (): void => {
    it('should return status code 500 problem', function (done): void {
      const strategy = new ExpressMappingStrategy(new MapperRegistry())
      const problem = strategy.map(new Error())!
      problem.should.have.property('type', 'about:blank')
      problem.status.should.equal(500)
      return done()
    })
  })
})
