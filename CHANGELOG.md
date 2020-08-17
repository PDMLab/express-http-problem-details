# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.1](https://github.com/PDMLab/express-http-problem-details/compare/v0.2.0...v0.2.1) (2020-08-17)

## [0.2.0](https://github.com/PDMLab/express-http-problem-details/compare/v0.1.5...v0.2.0) (2019-11-21)


### ⚠ BREAKING CHANGES

* `DefaultMappingStrategy` from `http-problem-details-mapper` or your own implementation of `IMappingStrategy` / `MappingStrategy` has to be used now.

* remove express mapping strategy and tests ([ec2b568](https://github.com/PDMLab/express-http-problem-details/commit/ec2b568910d75d96930561b8b7ffea4a64c9d81f))

### [0.1.5](https://github.com/PDMLab/express-http-problem-details/compare/v0.1.4...v0.1.5) (2019-11-01)


### Bug Fixes

* forward the error if it did not get mapped to a problem document ([f664675](https://github.com/PDMLab/express-http-problem-details/commit/f664675fc380aaf8fde38025f61793404d51d356)), closes [#12](https://github.com/PDMLab/express-http-problem-details/issues/12)

### [0.1.4](https://github.com/PDMLab/express-http-problem-details/compare/v0.1.3...v0.1.4) (2019-10-28)

### [0.1.3](https://github.com/PDMLab/express-http-problem-details/compare/v0.1.2...v0.1.3) (2019-10-28)

### [0.1.2](https://github.com/PDMLab/express-http-problem-details/compare/v0.1.1...v0.1.2) (2019-10-28)


### Features

* have the handler implement ErrorRequestHandler ([2bdba2a](https://github.com/PDMLab/express-http-problem-details/commit/2bdba2a9ed26ff8457b7cbbcd2912ba0714d9e84)), closes [#7](https://github.com/PDMLab/express-http-problem-details/issues/7)

### 0.1.1 (2019-10-27)

# 0.1.0 / 2019-04-25

## :tada: Enhancements

- [#1](https://github.com/pdmlab/express-http-problem-details/issues/1): Implement middleware ([**@alexzeitler**](https://github.com/alexzeitler))
