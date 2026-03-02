import {
  hexToRgbaObject,
  hexToRgbaString,
} from '../../src/convert/color'

test('color_convert', () => {

  expect(hexToRgbaString("#F00", 0.5)).toBe("rgba(255,0,0,0.5)")
  expect(hexToRgbaString("#FF0000", 0.5)).toBe("rgba(255,0,0,0.5)")
  expect(hexToRgbaString("#0F0", 0.7)).toBe("rgba(0,255,0,0.7)")
  expect(hexToRgbaString("#00FF00", 0.7)).toBe("rgba(0,255,0,0.7)")
  expect(hexToRgbaString("#00F", 0.9)).toBe("rgba(0,0,255,0.9)")
  expect(hexToRgbaString("#0000FF", 0.9)).toBe("rgba(0,0,255,0.9)")

  expect(hexToRgbaObject("#F00", 0.5)).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 0.5
  })
  expect(hexToRgbaObject("#FF0000", 0.5)).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 0.5
  })
  expect(hexToRgbaObject("#0F0", 0.7)).toEqual({
    red: 0,
    green: 255,
    blue: 0,
    alpha: 0.7
  })
  expect(hexToRgbaObject("#00FF00", 0.7)).toEqual({
    red: 0,
    green: 255,
    blue: 0,
    alpha: 0.7
  })
  expect(hexToRgbaObject("#00F", 0.9)).toEqual({
    red: 0,
    green: 0,
    blue: 255,
    alpha: 0.9
  })
  expect(hexToRgbaObject("#0000FF", 0.9)).toEqual({
    red: 0,
    green: 0,
    blue: 255,
    alpha: 0.9
  })

})
