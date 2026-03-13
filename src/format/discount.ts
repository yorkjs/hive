import { discountToDisplay } from '../convert/discount'

/**
 * 把万分比格式化为折扣
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export function formatDiscount(value: number) {
  return discountToDisplay(value) + '折'
}
