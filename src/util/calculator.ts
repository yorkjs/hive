/**
 * 此模块用于整数和浮点数的精确计算，避免浮点数的计算精度问题
 */

/**
 * 获取数字的小数位数
 *
 * @param num 要检查的数字
 * @returns 小数位数
 */
function getDecimalDigits(num: number): number {
  const decimalStr = num.toString().split('.')[1]
  return decimalStr ? decimalStr.length : 0
}

/**
 * 将数字转换为整数，消除小数部分
 *
 * @param num 要转换的数字
 * @returns 包含整数和倍数的对象
 */
function convertToInteger(num: number): { value: bigint; multiple: bigint } {
  const decimalDigits = getDecimalDigits(num)
  const multiple = 10 ** decimalDigits
  return {
      value: BigInt(Math.round(num * multiple)),
      multiple: BigInt(multiple),
  }
}

/**
* 精确加法，比如 plusNumber(3, 1) === 4
*
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
export function plusNumber(value1: number, value2: number): number {
  const { value: v1, multiple: m1 } = convertToInteger(value1)
  const { value: v2, multiple: m2 } = convertToInteger(value2)

  const commonMultiple = m1 > m2 ? m1 : m2
  const adjustedV1 = v1 * (commonMultiple / m1)
  const adjustedV2 = v2 * (commonMultiple / m2)

  return Number(adjustedV1 + adjustedV2) / Number(commonMultiple)
}

  /**
  * 精确减法，比如 minusNumber(3, 1) === 2
  *
  * @param value1 被减数
  * @param value2 减数
  * @returns 差
  */
export function minusNumber(value1: number, value2: number): number {
  const { value: v1, multiple: m1 } = convertToInteger(value1)
  const { value: v2, multiple: m2 } = convertToInteger(value2)

  const commonMultiple = m1 > m2 ? m1 : m2
  const adjustedV1 = v1 * (commonMultiple / m1)
  const adjustedV2 = v2 * (commonMultiple / m2)

  return Number(adjustedV1 - adjustedV2) / Number(commonMultiple)
}

/**
 * 精确乘法，比如 timesNumber(3, 2) === 6
 *
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
export function timesNumber(value1: number, value2: number): number {
  const { value: v1, multiple: m1 } = convertToInteger(value1)
  const { value: v2, multiple: m2 } = convertToInteger(value2)

  const product = v1 * v2
  const divisor = m1 * m2

  return Number(product) / Number(divisor)
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
    throw new Error('Division by zero')
  }

  const { value: v1, multiple: m1 } = convertToInteger(value1)
  const { value: v2, multiple: m2 } = convertToInteger(value2)

  // 计算 (v1 * m2) / (v2 * m1)，避免过大数值
  const dividend = v1 * m2
  const divisor = v2 * m1

  // 先进行 BigInt 除法，再调整精度
  const quotient = dividend / divisor
  const remainder = dividend % divisor

  // 如果余数为 0，直接返回整数部分
  if (remainder === 0n) {
    return Number(quotient)
  }

  // 否则，计算小数部分（使用额外倍数）
  const precision = 1e12 // 足够大的倍数，但避免溢出
  const scaledRemainder = remainder * BigInt(precision)
  const decimalPart = Number(scaledRemainder / divisor) / precision

  return Number(quotient) + decimalPart
}