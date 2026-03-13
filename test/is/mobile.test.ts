import {
  isMobile
} from '../../src/index'

test('isMobile', () => {

  expect(isMobile('13512345678')).toBe(true)
  expect(isMobile('1351234567')).toBe(false)
  expect(isMobile('135123456789')).toBe(false)
  expect(isMobile(' 13512345678')).toBe(false)
  expect(isMobile('13512345678 ')).toBe(false)
  expect(isMobile(' 13512345678 ')).toBe(false)
  expect(isMobile('')).toBe(false)

})
