/**
 * 把距离格式化为公里（公里比千米更符合国内用户认知）
 *
 * @group Function
 * @category Format
 * @param distance 距离，单位是米
 * @returns
 * @example
 * formatDistance(1000) // 1公里
 * formatDistance(10000) // 10公里
 */
export declare function formatDistance(distance: number): string;
