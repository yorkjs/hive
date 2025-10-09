/**
 * 米 转换为 千米
 *
 * @param value 后端的比例值
 * @returns
 */
export declare function distanceToDisplay(value: number): number;
/**
 * 千米 转换为 米
 *
 * @param value 前端的比例值
 * @returns
 */
export declare function distanceToBackend(value: number): number;
/**
 * 计算两个点之间的距离，返回距离单位是米
 *
 * @param value1 除数
 * @param value2 被除数
 * @returns
 */
export declare function calculateDistance(longitude1: number, latitude1: number, longitude2: number, latitude2: number): number;
