import { timesNumber, divideNumber } from '../util/calculator'

/**
 * 重量转换为前端显示所用的格式
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export function weightToG(value: number) {
  return divideNumber(value, 1000)
}

export function weightToKG(value: number) {
  return divideNumber(value, 1000)
}

/**
 * 重量转换为后端接口所用的格式
 *
 * @param value 前端的重量值
 * @returns
 */
export function weightToBackend(value: number) {
  return timesNumber(value, 100)
}