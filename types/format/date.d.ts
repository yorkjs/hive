/**
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @param format 格式，默认值为 DATE_YEAR_MONTH_DATE
 * @returns
 */
export declare function formatDate(timestamp: number, format?: string): string;
/**
 * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
 *
 * @group Function
 * @category Format
 * @param startTimestamp 开始时间的毫秒时间戳
 * @param endTimestamp 结束时间的毫秒时间戳
 * @returns
 */
export declare function formatDateRange(startTimestamp: number, endTimestamp: number): string;
/**
 * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @returns
 */
export declare function formatDateShortly(timestamp: number): string;
