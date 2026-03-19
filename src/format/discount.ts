import { discountToDisplay } from '../convert/discount'

/**
 * 把万分比格式化为常见的折扣显示格式
 *
 * @group Function
 * @category Format
 * @param value 万分比
 * @returns
 * @example
 * formatDiscount(8000) // 8折
 * formatDiscount(8800) // 8.8折
 */
export function formatDiscount(value: number) {
  return discountToDisplay(value) + '折'
}
