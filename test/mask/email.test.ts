import {
  maskEmail,
} from '../../src/index'

test('maskEmail', () => {

  expect(maskEmail('')).toBe("")
  expect(maskEmail('你')).toBe("你")
  expect(maskEmail('a@example.com')).toBe("***@example.com")
  expect(maskEmail('ab@example.com')).toBe("***b@example.com")
  expect(maskEmail('abc@example.com')).toBe("***c@example.com")
  expect(maskEmail('@example.com')).toBe('@example.com')

})
