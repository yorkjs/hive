import dayjs from 'dayjs'
import { MONTH_DEFAULT } from '../constant/month'

/**
 * 把时间戳格式化为 2020-10 格式
 *
 * @group Function
 * @category Format
 * @param value 时间戳
 * @returns
 */
export function formatMonth(value: number) {
  return dayjs(value).format(MONTH_DEFAULT)
}