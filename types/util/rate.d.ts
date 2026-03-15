/**
 * 计算万分比
 *
 * 通过 value1 除以 value2 得到一个比例，然后转成万分比
 *
 * > 万分比的意思是，10000 为 100%，需注意必须是整数
 *
 * @group Function
 * @category Util
 * @param value1 除数
 * @param value2 被除数
 * @returns 万分比（0-10000之间的整数）
 * @example
 * calculateRate(100, 100) // 10000
 * calculateRate(10, 100) // 1000
 */
export declare function calculateRate(value1: number, value2: number): number;
/**
 * 通过万分比计算数值，策略是向下取整
 *
 * @group Function
 * @category Util
 * @param value - 原始数值
 * @param rate - 万分比（0-10000之间的整数）
 * @returns 计算后的数值
 * @example
 * applyRateFloor(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
 * applyRateFloor(1000, 105) // 10，等价于百分比运算 1000 * 0.0105 = 10.5，向下取整得 10
 */
export declare function applyRateFloor(value: number, rate: number): number;
/**
 * 通过万分比计算数值，策略是向上取整
 *
 * @group Function
 * @category Util
 * @param value - 原始数值
 * @param rate - 万分比（0-10000之间的整数）
 * @returns 计算后的数值
 * @example
 * applyRateCeil(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
 * applyRateCeil(1000, 105) // 11，等价于百分比运算 1000 * 0.0105 = 10.5，向上取整得 11
 */
export declare function applyRateCeil(value: number, rate: number): number;
/**
 * 通过万分比计算数值，策略是四舍五入
 *
 * @group Function
 * @category Util
 * @param value - 原始数值
 * @param rate - 万分比（0-10000之间的整数）
 * @returns 计算后的数值
 * @example
 * applyRateRound(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
 * applyRateRound(1000, 105) // 11，等价于百分比运算 1000 * 0.0105 = 10.5，四舍五入得 11
 */
export declare function applyRateRound(value: number, rate: number): number;
