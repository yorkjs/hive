/**
 * 把时间戳格式化为 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @param format
 * @returns
 */
export declare function formatDateTime(timestamp: number, format?: string): string;
/**
 * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @returns
 */
export declare function formatDateTimeShortly(timestamp: number): string;
