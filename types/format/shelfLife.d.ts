/**
 * 格式化有效期
 *
 * @group Function
 * @category Format
 * @param value 有效期，单位是小时
 * @returns 格式化后的字符串
 * @example
 * formatShelfLife(24) // 1天
 * formatShelfLife(48) // 2天
 * formatShelfLife(365 * 24) // 1年
 */
export declare function formatShelfLife(value: number): string;
