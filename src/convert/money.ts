import { MONEY_YUAN_TO_CENT } from '../constant/money'
import { timesNumber, divideNumber } from '../util/number'

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
export function moneyToDisplay(value: number, unit = MONEY_YUAN_TO_CENT) {
  return divideNumber(value, unit)
}

/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值
 * @returns
 */
export function moneyToBackend(value: number, unit = MONEY_YUAN_TO_CENT) {
  return timesNumber(value, unit)
}
