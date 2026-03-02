interface IRgba {
  red: number
  green: number
  blue: number
  alpha: number
}

/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色对象
 */
export function hexToRgbaObject(color: string, alpha: number): IRgba {
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

  return {
    red: parseInt(hex.substring(0, 2), 16),
    green: parseInt(hex.substring(2, 4), 16),
    blue: parseInt(hex.substring(4, 6), 16),
    alpha: Math.max(0, Math.min(1, alpha))
  }
}

/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色字符串
 */
export function hexToRgbaString(color: string, alpha: number): string {
  const rgba = hexToRgbaObject(color, alpha)
  return `rgba(${rgba.red},${rgba.green},${rgba.blue},${rgba.alpha})`
}