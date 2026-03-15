/**
 * 格式化数量
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 * @example
 * formatCount(1000) // 1,000
 * formatCount(1000, '个') // 1,000个
 */
export declare function formatCount(value: number, unit?: string): string;
/**
 * 格式化数量（以尽可能短的方式显示数量）
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 * @example
 * formatCountShortly(100000) // 10万
 * formatCountShortly(100000, '个') // 10万个
 */
export declare function formatCountShortly(value: number, unit?: string): string;
