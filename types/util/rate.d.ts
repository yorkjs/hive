/**
 * 计算万分比
 *
 * value1 / value2 得到一个比例，然后转成万分比返回
 *
 * @group Function
 * @category Convert
 * @param value1 除数
 * @param value2 被除数
 * @returns 万分比比例
 */
export declare function calculateRate(value1: number, value2: number): number;
/**
 * 根据万分比计算数值
 *
 * @group Function
 * @category Convert
 * @param value - 原始数值
 * @param rate - 万分比比例
 * @returns 计算后的数值，仅返回整数部分
 */
export declare function applyRate(value: number, rate: number): number;
