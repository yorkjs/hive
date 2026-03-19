import { RANDOM_CHARSET_ALPHA_NUMERIC } from '../constant/randomCharset'
import { timeToTimeField } from '../convert/time'
import { padStringStart } from './string'

/**
 * 生成指定长度的随机整数
 *
 * @group Function
 * @category Util
 * @param length 生成的随机整数长度，比如 3 表示生成 [100, 999] 的整数
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
 * @group Function
 * @category Util
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @returns 指定范围内的随机整数
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
 * @group Function
 * @category Util
 * @param length 生成的随机字符串长度
 * @param charset 指定随机字符集（可选参数）
 * @returns 指定长度的随机字符串
 */
export function randomStringByLength(length: number, charset = RANDOM_CHARSET_ALPHA_NUMERIC) {
  const result = new Array(length)
  const charLength = charset.length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charLength)
    result[i] = charset[randomIndex]
  }
  return result.join('')
}

/**
 * 根据当前时间生成随机字符串，可通过 tailLength 控制重复的概率
 *
 * @group Function
 * @category Util
 * @param tailLength 尾部随机数长度，用于降低重复概率
 * @returns 生成的随机字符串
 */
export function randomStringByCurrentTime(tailLength: number): string {

  const timeField = timeToTimeField(new Date())

  const year = timeField.year
  const month = padStringStart(`${timeField.month}`, 2)
  const date = padStringStart(`${timeField.date}`, 2)
  const hour = padStringStart(`${timeField.hour}`, 2)
  const minute = padStringStart(`${timeField.minute}`, 2)
  const second = padStringStart(`${timeField.second}`, 2)
  const millisecond = padStringStart(`${timeField.millisecond}`, 3)

  let timeStr = `${year}${month}${date}${hour}${minute}${second}${millisecond}`
  if (tailLength > 0) {
    timeStr += randomIntegerByLength(tailLength)
  }
  return timeStr
}
