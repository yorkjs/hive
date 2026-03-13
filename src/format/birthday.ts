import dayjs from 'dayjs'
import { DATE_MONTH_DATE_DOT } from '../constant/date'

/**
 * 把生日时间戳格式化为 `月.日` 格式，如 10.01
 *
 * @group Function
 * @category Format
 * @param value 生日时间戳
 * @returns 格式化后的字符串
 */
export function formatBirthday(value: number) {
  return dayjs(value).format(DATE_MONTH_DATE_DOT)
}