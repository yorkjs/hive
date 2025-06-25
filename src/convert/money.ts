import NP from 'number-precision'

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 金额值
 * @returns
 */
export function moneyToDisplay(value: number) {
  return NP.divide(value, 100)
}

/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 金额值
 * @returns
 */
export function moneyToBackend(value: number) {
  return NP.times(value, 100)
}