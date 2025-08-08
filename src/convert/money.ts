import { timesNumber, divideNumber } from '../util/number'

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
export function moneyToDisplay(value: number) {
  return divideNumber(value, 100)
}

/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是元
 * @returns
 */
export function moneyYuanToBackend(value: number) {
  return timesNumber(value, 100)
}

/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是万元
 * @returns
 */
export function moneyTenThousandYuanToBackend(value: number) {
  return timesNumber(value, 1000000)
}