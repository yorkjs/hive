// 定义地球半径（单位：米）
const EARTH_RADIUS_M = 6371 * 1000

// 将角度转换为弧度
function toRadians(degrees: number) {
  return degrees * Math.PI / 180
}

/**
 * 计算两个坐标点之间的距离，距离的单位是米
 *
 * @group Function
 * @category Util
 * @param longitude1 第一个坐标点的经度
 * @param latitude1 第一个坐标点的纬度
 * @param longitude2 第二个坐标点的经度
 * @param latitude2 第二个坐标点的纬度
 * @returns 两个坐标点之间的距离，单位是米
 * @example
 * // 计算北京到上海的距离，约 1067 公里
 * calculateDistance(116.4074, 39.9042, 121.4737, 31.2304) // 1067310
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