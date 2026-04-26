/**
 * 把时间戳格式化为显示格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @param format 格式，默认值为 TIME_DEFAULT
 * @returns 格式化后的字符串
 * @example
 * formatTime(1773932460475) // 23:01:00
 */
export declare function formatTime(timestamp: number, format?: string): string;
