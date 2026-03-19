/**
 * 格式化时长
 *
 * @group Function
 * @category Format
 * @param value 时长，单位是毫秒
 * @returns 格式化后的字符串
 * @example
 * formatDuration(1000) // 1秒
 * formatDuration(60000) // 1分钟
 * formatDuration(3600000) // 1小时
 */
export declare function formatDuration(value: number): string;
