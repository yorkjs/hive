/**
 * 时间对象转成时间戳
 *
 * @param time 时间对象
 * @returns 时间戳
 */
export declare function timeToTimestamp(time: Date): number;
/**
 * 时间戳转成时间对象
 *
 * @param timestamp 时间戳
 * @returns 时间对象
 */
export declare function timestampToTime(timestamp: number): Date;
/**
 * 时间字符串转成时间对象
 *
 * @param str 时间字符串
 * @returns 时间对象
 */
export declare function stringToTime(str: string, format: string): Date | Error;
