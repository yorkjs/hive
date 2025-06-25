import {
  normalizeVersion,
} from '../../src/normalize/version'

test('normalizeVersion', () => {

  expect(normalizeVersion('1.0.10') > normalizeVersion('1.0.9')).toBe(true)
  expect(normalizeVersion('1.0.09') < normalizeVersion('1.0.10')).toBe(true)

  expect(normalizeVersion('1.0.09')).toBe('000100000009')

})
