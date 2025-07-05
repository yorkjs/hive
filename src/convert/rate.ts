import { timesNumber, divideNumber } from '../util/calculator'

/**
 * 比例转换为前端显示所用的格式
 *
 * @param value 后端的比例值
 * @returns
 */
export function rateToDisplay(value: number) {
  return divideNumber(value, 100)
}

/**
 * 比例转换为后端接口所用的格式
 *
 * @param value 前端的比例值
 * @returns
 */
export function rateToBackend(value: number) {
  return timesNumber(value, 100)
}