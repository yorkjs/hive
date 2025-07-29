/**
 * 万分比 转换为 百分比
 *
 * @param value 后端的比例值
 * @returns
 */
export declare function rateToDisplay(value: number): number;
/**
 * 百分比 转换为 万分比
 *
 * @param value 前端的比例值
 * @returns
 */
export declare function rateToBackend(value: number): number;
/**
 * 计算万分比
 *
 * @param value1 除数
 * @param value2 被除数
 * @returns
 */
export declare function calculateRate(value1: number, value2: number): number;
