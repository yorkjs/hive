interface ITimeField {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}
/**
 * 时间对象转成结构化的对象
 *
 * @group Function
 * @category Convert
 * @param t 时间对象
 * @returns 结构化的对象
 */
export declare function timeToTimeField(t: Date): ITimeField;
/**
 * 结构化的对象转成时间对象
 *
 * @group Function
 * @category Convert
 * @param t 结构化的对象
 * @returns 时间对象
 */
export declare function timeFieldToTime(t: ITimeField): Date;
/**
 * 时间对象转成时间戳
 *
 * @group Function
 * @category Convert
 * @param time 时间对象
 * @returns 时间戳
 */
export declare function timeToTimestamp(t: Date): number;
/**
 * 时间戳转成时间对象
 *
 * @group Function
 * @category Convert
 * @param timestamp 时间戳
 * @returns 时间对象
 */
export declare function timestampToTime(timestamp: number): Date;
export {};
