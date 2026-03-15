/**
* 精确加法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 第一个数值
* @param value2 第二个数值
* @returns 相加的结果
* @example
* plusNumber(3, 1) // 4
*/
export declare function plusNumber(value1: number, value2: number): number;
/**
* 精确减法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 第一个数值
* @param value2 第二个数值
* @returns 相减的结果
* @example
* minusNumber(3, 1) // 2
*/
export declare function minusNumber(value1: number, value2: number): number;
/**
 * 精确乘法
 *
 * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
 *
 * @group Function
 * @category Util
 * @param value1 第一个数值
 * @param value2 第二个数值
 * @returns 相乘结果
 * @example
 * timesNumber(3, 2) // 6
 */
export declare function timesNumber(value1: number, value2: number): number;
/**
* 精确除法
*
* > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
*
* @group Function
* @category Util
* @param value1 被除数
* @param value2 除数
* @returns 相除的结果
* @example
* divideNumber(6, 2) // 3
*/
export declare function divideNumber(value1: number, value2: number): number;
/**
 * 截断数字
 *
 * > 解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @group Function
 * @category Util
 * @param value 需要截断的数字
 * @param decimals 截断的小数位数
 * @returns 截断后的数字字符串
 * @example
 * truncateNumber(1.983, 1) // 1.9
 */
export declare function truncateNumber(value: number, decimals?: number): string;
/**
 * 内部使用原生 parseInt 函数解析字符串中的整数
 *
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
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
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
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
 * @example
 * hasDecimal(1) // false
 * hasDecimal(1.0) // false
 * hasDecimal(1.5) // true
 */
export declare function hasDecimal(value: number): boolean;
