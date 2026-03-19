/**
 * 把时间戳格式化为 2020-10-01 10:00 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @param format 格式，默认值为 DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE
 * @returns
 */
export declare function formatDateTime(timestamp: number, format?: string): string;
/**
 * 把时间戳格式化为 2020-10-01 00:00 至 2020-10-02 00:00 形式
 *
 * @group Function
 * @category Format
 * @param startTimestamp 开始时间的毫秒时间戳
 * @param endTimestamp 结束时间的毫秒时间戳
 * @returns
 */
export declare function formatDateTimeRange(startTimestamp: number, endTimestamp: number): string;
/**
 * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @returns
 */
export declare function formatDateTimeShortly(timestamp: number): string;
