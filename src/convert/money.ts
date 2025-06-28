import calculator from '../util/calculator'

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
export function moneyToDisplay(value: number) {
  return calculator.divide(value, 100)
}

/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是元
 * @returns
 */
export function moneyToBackend(value: number) {
  return calculator.times(value, 100)
}