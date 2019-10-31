import { IMappingStrategy, MapperRegistry } from 'http-problem-details-mapper'
import { ProblemDocument } from 'http-problem-details'

export class ExpressMappingStrategy implements IMappingStrategy {
  public registry: MapperRegistry;

  public constructor (registry: MapperRegistry) {
    this.registry = registry
  }

  public map (error: any): ProblemDocument | null {
    const err = error
    const errorMapper = this.registry.getMapper(error)
    if (errorMapper) {
      return errorMapper.mapError(err)
    }

    return null
  }
}
