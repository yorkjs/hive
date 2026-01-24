/**
* 获取某天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfDay(timestamp: number): number;
/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfPrevDay(timestamp: number): number;
/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfNextDay(timestamp: number): number;
/**
* 获取某天的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function endOfDay(timestamp: number): number;
/**
* 获取某周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfWeek(timestamp: number): number;
/**
* 获取前一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfPrevWeek(timestamp: number): number;
/**
* 获取后一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfNextWeek(timestamp: number): number;
/**
* 获取某周的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function endOfWeek(timestamp: number): number;
/**
* 获取某月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfMonth(timestamp: number): number;
/**
* 获取前一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfPrevMonth(timestamp: number): number;
/**
* 获取下一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function startOfNextMonth(timestamp: number): number;
/**
* 获取某月的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export declare function endOfMonth(timestamp: number): number;
interface TimeRangeOptimizer {
    isDay?: (day: number) => void;
    isWeek?: (week: number) => void;
    isMonth?: (month: number) => void;
    isRange: (start: number, end: number) => void;
}
/**
* 优化时间范围，尽量归一到某个类型下，无法归一时，才用范围
*
* @param startTimestamp 开始毫秒时间戳
* @param endTimestamp 结束毫秒时间戳
* @param optimizer 优化器，优先走 day/week/month 分支
* @returns
*/
export declare function optimizeTimeRange(startTimestamp: number, endTimestamp: number, optimizer: TimeRangeOptimizer): void;
export {};
