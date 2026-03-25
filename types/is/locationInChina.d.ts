/**
 * 判断经纬度是否在中国的大致范围内
 *
 * 范围说明 (基于 WGS-84 坐标系的大致包围盒):
 * - 最北端: 黑龙江省漠河以北的黑龙江主航道中心线 (约 53.5° N)
 * - 最南端: 南海南沙群岛的曾母暗沙 (约 3.5° N - 4.0° N)
 * - 最西端: 新疆帕米尔高原 (约 73.5° E)
 * - 最东端: 黑龙江与乌苏里江主航道中心线汇合处 (约 135.0° E)
 *
 * @group Function
 * @category Is
 * @param longitude 经度 (-180 到 180)
 * @param latitude 纬度 (-90 到 90)
 * @returns 如果在中国范围内返回 true，否则返回 false
 * @example
 * isLocationInChina(116.4074, 39.9042) // true
 */
export declare function isLocationInChina(longitude: number, latitude: number): boolean;
