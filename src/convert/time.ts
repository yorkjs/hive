import { DATE_YEAR_MONTH_DATE, DATE_YEAR_MONTH_DATE_DOT, DATE_YEAR_MONTH_DATE_SLASH } from '../constant/date'
import { DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH } from '../constant/dateTime'

interface ITimeField {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

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
 * @param timestamp 时间戳
 * @returns 时间对象
 */
export function timestampToTime(timestamp: number) {
  return new Date(timestamp)
}

/**
 * 时间字符串转成时间对象
 *
 * @param str 时间字符串
 * @returns 时间对象
 */
export function stringToTime(str: string, format: string) {

  switch (format) {
    case DATE_YEAR_MONTH_DATE:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND:
      break

    case DATE_YEAR_MONTH_DATE_DOT:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT:
      str = str.replace(/\./g, '-')
      break

    case DATE_YEAR_MONTH_DATE_SLASH:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH:
    case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH:
      str = str.replace(/\//g, '-')
      break

    default:
      return new Error('format is not supported')
  }

  return new Date(str)
}
