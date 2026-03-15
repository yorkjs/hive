import {
  darkenColor,
  lightenColor,
  hexToRgbaObject,
  hexToRgbaString,
  hexToHslObject,
} from '../../src/index'

test('color_convert', () => {

  expect(hexToRgbaString("#F00", 0.5)).toBe("rgba(255,0,0,0.5)")
  expect(hexToRgbaString("#FF0000", 0.5)).toBe("rgba(255,0,0,0.5)")
  expect(hexToRgbaString("#f00", 0.5)).toBe("rgba(255,0,0,0.5)")
  expect(hexToRgbaString("#ff0000", 0.5)).toBe("rgba(255,0,0,0.5)")

  expect(hexToRgbaString("#0F0", 0.7)).toBe("rgba(0,255,0,0.7)")
  expect(hexToRgbaString("#00FF00", 0.7)).toBe("rgba(0,255,0,0.7)")
  expect(hexToRgbaString("#00F", 0.9)).toBe("rgba(0,0,255,0.9)")
  expect(hexToRgbaString("#0000FF", 0.9)).toBe("rgba(0,0,255,0.9)")

  expect(hexToRgbaObject("#F00")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 1
  })
  expect(hexToRgbaObject("#F000")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 0
  })
  expect(hexToRgbaObject("#F00F")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 1
  })
  expect(hexToRgbaObject("#FF0000")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 1
  })
  expect(hexToRgbaObject("#FF000000")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 0,
  })
  expect(hexToRgbaObject("#FF0000FF")).toEqual({
    red: 255,
    green: 0,
    blue: 0,
    alpha: 1,
  })
  expect(hexToHslObject("#F00")).toEqual({
    hue: 0,
    saturation: 100,
    lightness: 50,
  })

  expect(darkenColor("#ff0000", 0.2)).toBe("#990000")
  expect(lightenColor("#ff0000", 0.2)).toBe("#FF6666")
  expect(lightenColor("#ff000000", 0.2)).toBe("#FF666600")
  expect(lightenColor("#ff0000FF", 0.2)).toBe("#FF6666")

})
