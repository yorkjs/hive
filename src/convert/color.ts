import { padStringStart } from '../util/string'

/**
 * RGBA 对象
 * @group Class
 * @category Convert
 * @remarks 该类为通用工具类，无业务耦合
 */
interface IRgba {
  red: number
  green: number
  blue: number
  alpha: number
}
/**
 * HSL 对象
 * @group Class
 * @category Convert
 * @remarks 该类为通用工具类，无业务耦合
 */
interface IHsl {
  hue: number
  saturation: number
  lightness: number
}

/**
 * 将 HEX 颜色转换为 RGBA 对象
 *
 * @group Function
 * @category Convert
 * @param color HEX 颜色值
 * @returns RGBA 颜色对象
 */
export function hexToRgbaObject(color: string) {
  // 移除 # 号
  let hex = color.replace('#', '')

  // 处理简写格式 (#rgb 或 #rgba)
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(function (char) { return char + char }).join('')
  }

  // 验证hex长度
  if (hex.length !== 6 && hex.length !== 8) {
    throw new Error('无效的HEX颜色格式')
  }

  const result: IRgba = {
    red: parseInt(hex.substring(0, 2), 16),
    green: parseInt(hex.substring(2, 4), 16),
    blue: parseInt(hex.substring(4, 6), 16),
    alpha: 1,
  }

  if (hex.length === 8) {
    result.alpha = parseInt(hex.substring(6, 8), 16) / 255
  }

  return result

}

/**
 * 将 HEX 颜色转换为 HSL 对象
 *
 * @group Function
 * @category Convert
 * @param color HEX 颜色值
 * @returns HSL 颜色对象
 */
export function hexToHslObject(color: string) {
  return rgbToHsl(hexToRgbaObject(color))
}

/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @group Function
 * @category Convert
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色字符串
 */
export function hexToRgbaString(color: string, alpha: number) {
  const rgba = hexToRgbaObject(color)
  return `rgba(${rgba.red},${rgba.green},${rgba.blue},${alpha})`
}

/**
 * 加深颜色亮度
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @param offset 加深幅度，取值范围 0-1
 * @returns 新的 hex 颜色
 */
export function darkenColor(color: string, offset: number) {
  return adjustColorBrightness(color, -offset)
}

/**
 * 减淡颜色亮度
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @param offset 减淡幅度，取值范围 0-1
 * @returns 新的 hex 颜色
 */
export function lightenColor(color: string, offset: number) {
  return adjustColorBrightness(color, offset)
}

/**
 * 调整颜色亮度
 *
 * @group Function
 * @category Convert
 * @param hex 原始颜色
 * @param offset 取值范围 0-1
 * @returns 新的 hex 颜色字符串
 */
function adjustColorBrightness(hex: string, offset: number) {
  const rgba = hexToRgbaObject(hex)
  const hsl = rgbToHsl(rgba)

  // 调整亮度，限制在 0-100 之间
  const newL = hsl.lightness + (offset * 100)
  hsl.lightness = Math.max(0, Math.min(100, newL))

  const newRgb = hslToRgb(hsl)

  // 如果原颜色有透明度，返回值保留该透明度
  let result = `#${toHex(newRgb.red)}${toHex(newRgb.green)}${toHex(newRgb.blue)}`
  if (rgba.alpha < 1) {
    result += toHex(rgba.alpha * 255)
  }
  return result
}

/**
 * 将 RGB 转换为 HSL
 * r, g, b: 0-255
 * 返回 h: 0-360, s: 0-100, l: 0-100
 */
function rgbToHsl(rgb: IRgba): IHsl {
  const r = rgb.red / 255
  const g = rgb.green / 255
  const b = rgb.blue / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  let l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h *= 60
  }

  return {
    hue: h,
    saturation: s * 100,
    lightness: l * 100,
  }
}

/**
 * 将 HSL 转换为 RGB
 * 返回 r, g, b: 0-255
 */
function hslToRgb(hsl: IHsl): IRgba {
  const h = hsl.hue / 360
  const s = hsl.saturation / 100
  const l = hsl.lightness / 100

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const r = hue2rgb(p, q, h + 1 / 3)
  const g = hue2rgb(p, q, h)
  const b = hue2rgb(p, q, h - 1 / 3)

  return {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
    alpha: 1,
  }
}

function hue2rgb(p: number, q: number, t: number) {
  if (t < 0) {
    t += 1
  }
  if (t > 1) {
    t -= 1
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  }
  if (t < 1 / 2) {
    return q
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  }
  return p
}

function toHex(color: number) {
  return padStringStart(color.toString(16), 2)
}
