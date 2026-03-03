import {
  maskMobile,
} from '../../src/index'

test('maskMobile', () => {

  expect(maskMobile('')).toBe("")
  expect(maskMobile('你')).toBe("你")
  expect(maskMobile('13812345678')).toBe("138****5678")
  expect(maskMobile('1234567890')).toBe('1234567890')
  expect(maskMobile('12345')).toBe('12345')
  expect(maskMobile('138-0013-8000')).toBe('138-0013-8000')

})
