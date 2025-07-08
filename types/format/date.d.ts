/**
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
export declare function formatDate(timestamp: number): string;
/**
 * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
export declare function formatDateShortly(timestamp: number): string;
