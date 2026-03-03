/**
 * 生成指定长度的随机整数
 *
 * @param length 数字长度
 * @returns 指定长度的随机整数
 */
export function randomIntegerByLength(length: number) {

  const min = Math.pow(10, length - 1)
  const max = Math.pow(10, length) - 1

  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成指定范围内的随机整数 [min, max)
 *
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @returns 范围内的随机整数
 */
export function randomIntegerByRange(min: number, max: number) {
  if (min === max) {
    return min
  }
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * 生成指定长度的随机字符串
 *
 * @param length 字符串长度
 * @param chars 随机字符集
 * @returns 随机字符串
 */
export function randomStringByLength(length: number, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  const result = new Array(length)
  const charLength = chars.length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charLength)
    result[i] = chars[randomIndex]
  }
  return result.join('')
}