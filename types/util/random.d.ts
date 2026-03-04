/**
 * 生成指定长度的随机整数
 *
 * @param length 数字长度
 * @returns 指定长度的随机整数
 */
export declare function randomIntegerByLength(length: number): number;
/**
 * 生成指定范围内的随机整数 [min, max)
 *
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @returns 范围内的随机整数
 */
export declare function randomIntegerByRange(min: number, max: number): number;
/**
 * 生成指定长度的随机字符串
 *
 * @param length 字符串长度
 * @param chars 随机字符集
 * @returns 随机字符串
 */
export declare function randomStringByLength(length: number, chars?: string): string;
/**
 * 根据当前时间生成随机字符串，可通过 tailLength 控制重复的概率
 *
 * @param tailLength 尾部随机数长度，用于降低重复概率
 * @returns 生成的随机字符串
 */
export declare function randomStringByCurrentTime(tailLength: number): string;
