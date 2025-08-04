import { timesNumber, divideNumber } from '../util/number'

/**
 * 毫克 转换为 克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export function weightToG(value: number) {
  return divideNumber(value, 1000)
}

/**
 * 毫克 转换为 千克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export function weightToKG(value: number) {
  return divideNumber(value, 1000000)
}

/**
 * 克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是克
 * @returns
 */
export function weightGToBackend(value: number) {
  return timesNumber(value, 1000)
}

/**
 * 千克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是千克
 * @returns
 */
export function weightKGToBackend(value: number) {
  return timesNumber(value, 1000000)
}