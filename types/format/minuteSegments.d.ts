/**
 * 格式化分钟段
 *
 * @group Function
 * @category Format
 * @param value 分钟段范围为 [0, 2880] 可跨天, 0-1440 为当日，1440-2880 为次日
 * @param separator 分隔符，默认是 、
 * @returns 格式化后的字符串
 * @example
 * formatMinuteSegments([0, 1440]) // 全天
 */
export declare function formatMinuteSegments(value: number[], separator?: string): string;
