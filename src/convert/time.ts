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
export function timeToTimeField(t: Date): ITimeField {
  return {
    year: t.getFullYear(),
    month: t.getMonth() + 1,
    date: t.getDate(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
    millisecond: t.getMilliseconds(),
  };
}

/**
 * 结构化的对象转成时间对象
 *
 * @group Function
 * @category Convert
 * @param t 结构化的对象
 * @returns 时间对象
 */
export function timeFieldToTime(t: ITimeField): Date {
  return new Date(
    t.year,
    t.month - 1,
    t.date,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
}

/**
 * 时间对象转成时间戳
 *
 * @group Function
 * @category Convert
 * @param time 时间对象
 * @returns 时间戳
 */
export function timeToTimestamp(t: Date) {
  const timestamp = t.getTime()
  return isNaN(timestamp) ? 0 : timestamp
}

/**
 * 时间戳转成时间对象
 *
 * @group Function
 * @category Convert
 * @param timestamp 时间戳
 * @returns 时间对象
 */
export function timestampToTime(timestamp: number) {
  return new Date(timestamp)
}