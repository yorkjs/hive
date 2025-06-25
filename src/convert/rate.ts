import NP from 'number-precision'

/**
 * 比例转换为前端显示所用的格式
 *
 * @param value 比例值
 * @returns
 */
export function rateToDisplay(value: number) {
  return NP.divide(value, 100)
}

/**
 * 比例转换为后端接口所用的格式
 *
 * @param value 比例值
 * @returns
 */
export function rateToBackend(value: number) {
  return NP.times(value, 100)
}