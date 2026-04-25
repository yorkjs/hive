import {
  isHexColor,
} from '../../src/index'

test('isHexColor', () => {

  expect(isHexColor('#666')).toBe(true)
  expect(isHexColor('#616161')).toBe(true)
  expect(isHexColor('#6')).toBe(false)
  expect(isHexColor('#66')).toBe(false)
  expect(isHexColor('#6666')).toBe(true) // rgba
  expect(isHexColor('#66666')).toBe(false)
  expect(isHexColor('#6666666')).toBe(false)
  expect(isHexColor('#66666666')).toBe(true) // rgba
  expect(isHexColor('#666666666')).toBe(false)

  expect(isHexColor('666')).toBe(false)
  expect(isHexColor('666666')).toBe(false)

})
