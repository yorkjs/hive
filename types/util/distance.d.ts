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
export declare function calculateDistance(longitude1: number, latitude1: number, longitude2: number, latitude2: number): number;
