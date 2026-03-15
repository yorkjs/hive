/**
 * 格式化金额（元），保留 2 位小数
 *
 * @group Function
 * @category Format
 * @param value 单位是分的金额
 * @returns 格式化后的字符串
 * @example
 * formatAmount(1000) // 10.00元
 * formatAmount(1000, '') // 10.00
 */
export declare function formatAmount(value: number, unit?: string): string;
/**
 * 格式化金额（厘），保留 3 位小数
 *
 * @group Function
 * @category Format
 * @param value 单位是厘的金额
 * @returns 格式化后的字符串
 * @example
 * formatPenny(10000) // 10.000元
 * formatPenny(10000, '') // 10.000
 */
export declare function formatPenny(value: number, unit?: string): string;
/**
 * 格式化金额（元），以较短的方式返回
 *
 * @group Function
 * @category Format
 * @param value 单位是分的金额
 * @returns 格式化后的字符串
 * @example
 * formatAmountShortly(10000000) // 10万元
 * formatAmountShortly(10000000, '') // 10万
 */
export declare function formatAmountShortly(value: number, unit?: string): string;
