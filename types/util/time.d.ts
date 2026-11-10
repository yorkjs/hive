/**
 * 解析时间字符串
 *
 * @group Function
 * @category Util
 * @param str 时间字符串
 * @param format 时间格式，按该格式解析时间字符串
 * @returns 解析成功，返回 Date 对象，否则报错
 * @example
 * parseTime('2020-01-01', DATE_YEAR_MONTH_DATE) // Date {2020-01-01}
 */
export declare function parseTime(str: string, format: string): Error | Date;
/**
 * 获取某个分钟的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfMinute(timestamp: number): number;
/**
 * 获取前一分钟的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfPrevMinute(timestamp: number): number;
/**
 * 获取下一分钟的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfNextMinute(timestamp: number): number;
/**
 * 获取某个分钟的结束时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function endOfMinute(timestamp: number): number;
/**
 * 获取某个小时开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfHour(timestamp: number): number;
/**
 * 获取前一个小时开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfPrevHour(timestamp: number): number;
/**
 * 获取下个小时开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfNextHour(timestamp: number): number;
/**
 * 获取某个小时结束时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function endOfHour(timestamp: number): number;
/**
* 获取某天的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfDay(timestamp: number): number;
/**
* 获取前一天的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfPrevDay(timestamp: number): number;
/**
* 获取前一天的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfNextDay(timestamp: number): number;
/**
* 获取某天的结束时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function endOfDay(timestamp: number): number;
/**
* 获取某周的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfWeek(timestamp: number): number;
/**
* 获取前一周的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfPrevWeek(timestamp: number): number;
/**
* 获取后一周的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfNextWeek(timestamp: number): number;
/**
* 获取某周的结束时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function endOfWeek(timestamp: number): number;
/**
* 获取某月的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfMonth(timestamp: number): number;
/**
* 获取前一月的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfPrevMonth(timestamp: number): number;
/**
* 获取下一月的开始时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function startOfNextMonth(timestamp: number): number;
/**
* 获取某月的结束时间
*
* @group Function
* @category Util
* @param timestamp 毫秒时间戳
* @returns 毫秒时间戳
*/
export declare function endOfMonth(timestamp: number): number;
/**
 * 获取某年的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfYear(timestamp: number): number;
/**
 * 获取前一年的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfPrevYear(timestamp: number): number;
/**
 * 获取下一年的开始时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function startOfNextYear(timestamp: number): number;
/**
 * 获取某年的结束时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function endOfYear(timestamp: number): number;
/**
 * 获取昨天的同时刻
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function sameOfPrevDay(timestamp: number): number;
/**
 * 获取前一周的同时刻
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function sameOfPrevWeek(timestamp: number): number;
/**
 * 获取上个月的同时刻
 * 如果传入的时间戳大于上个月的最后一天，则返回上个月的最后时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function sameOfPrevMonth(timestamp: number): number;
/**
 * 获取去年的同时刻
 * 如果传入的时间戳大于去年该月的最后一天，则返回去年该月的最后时间
 *
 * @group Function
 * @category Util
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export declare function sameOfPrevYear(timestamp: number): number;
/**
 * 判断目标时间是否落在给定的分钟段区间内（左闭右开）
 *
 * @group Function
 * @category Util
 * @param segments 分钟段数组，长度必须为偶数，每对 [start, end) 表示一个区间
 * @param target 目标时间
 * @returns 若目标时间落在任意区间内则返回 true，否则 false
 */
export declare function matchMinuteSegments(segments: number[], target: Date): boolean;
interface ITimeRangeOptimizer {
    isHour?: (hour: number) => void;
    isDay?: (day: number) => void;
    isWeek?: (week: number) => void;
    isMonth?: (month: number) => void;
    isRange: (start: number, end: number) => void;
}
/**
* 优化时间范围，尽量归一到某个类型下，无法归一时，才用范围
*
* 后端常用，前端几乎用不上
*
* @group Function
* @category Util
* @param startTimestamp 开始毫秒时间戳
* @param endTimestamp 结束毫秒时间戳
* @param optimizer 优化器，优先走 isHour/isDay/isWeek/isMonth 分支
*/
export declare function optimizeTimeRange(startTimestamp: number, endTimestamp: number, optimizer: ITimeRangeOptimizer): void;
export {};
