import {
  maskName,
} from '../../src/index'

test('maskName', () => {

  expect(maskName('')).toBe("***")
  expect(maskName('你')).toBe("***")
  expect(maskName('你好')).toBe("***好")
  expect(maskName('你好呀')).toBe("***呀")
  expect(maskName('你好呀123')).toBe("***3")

})
