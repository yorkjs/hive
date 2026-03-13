/**
 * 格式化营业时间
 *
 * @group Function
 * @category Format
 * @param value 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
 * @returns 格式化后的字符串
 */
export declare function formatBusinessTimes(value: number[]): string;
