/**
 * 把生日时间戳格式化为 `月.日` 格式，如 10.01
 *
 * @group Function
 * @category Format
 * @param value 生日毫秒时间戳
 * @param format 格式，默认是 DATE_MONTH_DATE_DOT
 * @returns 格式化后的字符串
 * @example
 * formatBirthday(1773469396771) // 03.14
 */
export declare function formatBirthday(value: number, format?: string): string;
