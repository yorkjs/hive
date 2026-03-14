import { timesNumber, divideNumber, hasDecimal } from '../util/number'

/**
 * 米 转换为 千米
 *
 * @group Function
 * @category Convert
 * @param value 后端的比例值
 * @returns
 */
export function distanceToDisplay(value: number) {
  const result = divideNumber(value, 1000)
  // 如果小数部分为 0，返回整数部分
  return hasDecimal(result) ? result : Math.floor(result)
}

/**
 * 千米 转换为 米
 *
 * @group Function
 * @category Convert
 * @param value 前端的比例值
 * @returns
 */
export function distanceToBackend(value: number) {
  return Math.floor(timesNumber(value, 1000))
}


// 定义地球半径（单位：米）
const EARTH_RADIUS_M = 6371 * 1000

// 将角度转换为弧度
function toRadians(degrees: number) {
  return degrees * Math.PI / 180
}

/**
 * 计算两个坐标点之间的距离
 *
 * @group Function
 * @category Util
 * @param longitude1 第一个点的经度
 * @param latitude1 第一个点的纬度
 * @param longitude2 第二个点的经度
 * @param latitude2 第二个点的纬度
 * @returns 两点之间的距离，单位是米
 */
export function calculateDistance(
  longitude1: number,
  latitude1: number,
  longitude2: number,
  latitude2: number
) {
  // 将经纬度转换为弧度
  const lat1 = toRadians(latitude1)
  const lon1 = toRadians(longitude1)
  const lat2 = toRadians(latitude2)
  const lon2 = toRadians(longitude2)

  // 计算差值
  const dLat = lat2 - lat1
  const dLon = lon2 - lon1

  // Haversine 公式
  const a = Math.pow(Math.sin(dLat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.pow(Math.sin(dLon / 2), 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  // 计算距离
  return Math.floor(EARTH_RADIUS_M * c)
}