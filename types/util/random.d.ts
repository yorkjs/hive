/**
 * 生成指定长度的随机整数
 *
 * @group Function
 * @category Util
 * @param length 生成的随机整数长度，比如 3 表示生成 [100, 999] 的整数
 * @returns 指定长度的随机整数
 */
export declare function randomIntegerByLength(length: number): number;
/**
 * 生成指定范围内的随机整数 [min, max)
 *
 * @group Function
 * @category Util
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @returns 指定范围内的随机整数
 */
export declare function randomIntegerByRange(min: number, max: number): number;
/**
 * 生成指定长度的随机字符串
 *
 * @group Function
 * @category Util
 * @param length 生成的随机字符串长度
 * @param charset 指定随机字符集（可选参数）
 * @returns 指定长度的随机字符串
 */
export declare function randomStringByLength(length: number, charset?: string): string;
/**
 * 根据当前时间生成随机字符串，可通过 tailLength 控制重复的概率
 *
 * @group Function
 * @category Util
 * @param tailLength 尾部随机数长度，用于降低重复概率
 * @returns 生成的随机字符串
 */
export declare function randomStringByCurrentTime(tailLength: number): string;
