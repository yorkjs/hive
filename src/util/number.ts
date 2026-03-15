import * as NP from 'number-precision'

/**
* 精确加法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 第一个数值
* @param value2 第二个数值
* @returns 相加的结果
* @example
* plusNumber(3, 1) // 4
*/
export function plusNumber(value1: number, value2: number) {
  return NP.plus(value1, value2)
}

/**
* 精确减法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 第一个数值
* @param value2 第二个数值
* @returns 相减的结果
* @example
* minusNumber(3, 1) // 2
*/
export function minusNumber(value1: number, value2: number) {
  return NP.minus(value1, value2)
}

/**
 * 精确乘法
 *
 * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
 *
 * @group Function
 * @category Util
 * @param value1 第一个数值
 * @param value2 第二个数值
 * @returns 相乘结果
 * @example
 * timesNumber(3, 2) // 6
 */
export function timesNumber(value1: number, value2: number) {
  return NP.times(value1, value2)
}

/**
* 精确除法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 被除数
* @param value2 除数
* @returns 相除的结果
* @example
* divideNumber(6, 2) // 3
*/
export function divideNumber(value1: number, value2: number) {
  if (value2 === 0) {
    throw new Error('Divisor cannot be zero')
  }
  return NP.divide(value1, value2)
}

/**
 * 截断数字
 *
 * > 解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @group Function
 * @category Util
 * @param value 需要截断的数字
 * @param decimals 截断的小数位数
 * @returns 截断后的数字字符串
 * @example
 * truncateNumber(1.983, 1) // 1.9
 */
export function truncateNumber(value: number, decimals: number = 0) {

  let [integerPart, decimalPart] = value.toString().split('.')

  if (decimals === 0) {
    return integerPart
  }
  if (!decimalPart) {
    return `${integerPart}.${''.padEnd(decimals, '0')}`
  }

  const truncatedDecimal = decimalPart.length > decimals
    ? decimalPart.substring(0, decimals)
    : decimalPart.padEnd(decimals, '0')

  return `${integerPart}.${truncatedDecimal}`
}

/**
 * 内部使用原生 parseInt 函数解析字符串中的整数
 *
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
 *
 * @group Function
 * @category Util
 * @param value 要解析的字符串
 * @param radix 进制
 * @returns 解析后的整数，解析失败返回 null
 */
export function parseInteger(value: string, radix?: number) {
  const result = parseInt(value, radix)
  return isNaN(result) ? null : result
}

/**
 * 内部使用原生 parseFloat 函数解析字符串中的浮点数
 *
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
 *
 * @group Function
 * @category Util
 * @param value 要解析的字符串
 * @returns 解析后的浮点数，解析失败返回 null
 */
export function parseNumber(value: string) {
  const result = parseFloat(value)
  return isNaN(result) ? null : result
}

/**
 * 数字是否包含小数部分
 *
 * @group Function
 * @category Util
 * @param value 要校验的值
 * @returns 是否包含小数
 * @example
 * hasDecimal(1) // false
 * hasDecimal(1.0) // false
 * hasDecimal(1.5) // true
 */
export function hasDecimal(value: number): boolean {
  // 先排除无效数字，它们既不是整数也没有小数
  if (!Number.isFinite(value)) {
    return false
  }
  return value % 1 !== 0
}