import * as NP from 'number-precision'


/**
* 精确加法，比如 plusNumber(3, 1) === 4
*
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
export function plusNumber(value1: number, value2: number): number {
  return NP.plus(value1, value2)
}

/**
* 精确减法，比如 minusNumber(3, 1) === 2
*
* @param value1 被减数
* @param value2 减数
* @returns 差
*/
export function minusNumber(value1: number, value2: number): number {
  return NP.minus(value1, value2)
}

/**
 * 精确乘法，比如 timesNumber(3, 2) === 6
 *
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
export function timesNumber(value1: number, value2: number): number {
  return NP.times(value1, value2)
}

/**
* 精确除法，比如 divideNumber(6, 2) === 3
*
* @param value1 被除数
* @param value2 除数
* @returns 商
*/
export function divideNumber(value1: number, value2: number): number {
  if (value2 === 0) {
    throw new Error('Divisor cannot be zero')
  }
  return NP.divide(value1, value2)
}

/**
 * 截断数字，解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @param value
 * @param decimals
 * @returns
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