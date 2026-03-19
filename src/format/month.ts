import dayjs from 'dayjs'
import { MONTH_DEFAULT } from '../constant/month'

/**
 * 把时间戳格式化为月份（包含年和月）
 *
 * @group Function
 * @category Format
 * @param value 毫秒时间戳
 * @param format 格式，默认是 yyyy-MM，如果不符合要求，从 MONTH_XX 常量选择
 * @returns
 * @example
 * formatMonth(1601513800000) // 2020-10
 */
export function formatMonth(value: number, format = MONTH_DEFAULT) {
  return dayjs(value).format(format)
}