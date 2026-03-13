/**
* 精确加法，比如 plusNumber(3, 1) === 4
*
* @group Function
* @category Util
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
export declare function plusNumber(value1: number, value2: number): number;
/**
* 精确减法，比如 minusNumber(3, 1) === 2
*
* @group Function
* @category Util
* @param value1 被减数
* @param value2 减数
* @returns 差
*/
export declare function minusNumber(value1: number, value2: number): number;
/**
 * 精确乘法，比如 timesNumber(3, 2) === 6
 *
 * @group Function
 * @category Util
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
export declare function timesNumber(value1: number, value2: number): number;
/**
* 精确除法，比如 divideNumber(6, 2) === 3
*
* @group Function
* @category Util
* @param value1 被除数
* @param value2 除数
* @returns 商
*/
export declare function divideNumber(value1: number, value2: number): number;
/**
 * 截断数字，解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @group Function
 * @category Util
 * @param value
 * @param decimals
 * @returns
 */
export declare function truncateNumber(value: number, decimals?: number): string;
/**
 * 以较短的方式返回数字，避免 UI 层显示不下所有数字
 *
 * @group Function
 * @category Util
 * @param value
 * @param decimals
 * @returns
 */
export declare function shortNumber(value: number, formatUnshort: (value: number) => string): string;
/**
 * 内部使用原生 parseInt 函数解析字符串中的整数
 *
 * @group Function
 * @category Util
 * @param value 要解析的字符串
 * @param radix 进制
 * @returns 解析后的整数，解析失败返回 null
 */
export declare function parseInteger(value: string, radix?: number): number | null;
/**
 * 内部使用原生 parseFloat 函数解析字符串中的浮点数
 *
 * @group Function
 * @category Util
 * @param value 要解析的字符串
 * @returns 解析后的浮点数，解析失败返回 null
 */
export declare function parseNumber(value: string): number | null;
/**
 * 数字是否包含小数部分
 *
 * @group Function
 * @category Util
 * @param value 要校验的值
 * @returns 是否包含小数
 */
export declare function hasDecimal(value: number): boolean;
