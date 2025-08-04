/**
* 精确加法，比如 plusNumber(3, 1) === 4
*
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
export declare function plusNumber(value1: number, value2: number): number;
/**
* 精确减法，比如 minusNumber(3, 1) === 2
*
* @param value1 被减数
* @param value2 减数
* @returns 差
*/
export declare function minusNumber(value1: number, value2: number): number;
/**
 * 精确乘法，比如 timesNumber(3, 2) === 6
 *
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
export declare function timesNumber(value1: number, value2: number): number;
/**
* 精确除法，比如 divideNumber(6, 2) === 3
*
* @param value1 被除数
* @param value2 除数
* @returns 商
*/
export declare function divideNumber(value1: number, value2: number): number;
/**
 * 截断数字，解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @param value
 * @param decimals
 * @returns
 */
export declare function truncateNumber(value: number, decimals?: number): string;
