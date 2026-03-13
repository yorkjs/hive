interface IDuration {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
/**
 * 标准化时长
 *
 * @group Function
 * @category Normalize
 * @param value 时长，单位是毫秒
 * @returns 结构化的时长，包含天、小时、分钟、秒信息
 * @example
 * normalizeDuration(1000) // { days: 0, hours: 0, minutes: 0, seconds: 1 }
 */
export declare function normalizeDuration(value: number): IDuration;
export {};
