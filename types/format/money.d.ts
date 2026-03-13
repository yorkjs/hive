/**
 * 格式化金额（元），保留 2 位小数
 *
 * @group Function
 * @category Format
 * @param value
 * @example
 * const amount = formatAmount(1000, '元'),
 * print(amount) // 输出：10元
 * @returns
 */
export declare function formatAmount(value: number, unit?: string): string;
/**
 * 格式化金额（厘），保留 3 位小数
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export declare function formatPenny(value: number, unit?: string): string;
/**
 * 格式化金额（元），以较短的方式返回
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export declare function formatAmountShortly(value: number, unit?: string): string;
