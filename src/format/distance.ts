import { distanceToDisplay } from '../convert/distance'

/**
 * 把距离格式化为千米单位
 *
 * @group Function
 * @category Format
 * @param distance
 * @returns
 */
export function formatDistance(distance: number) {
  return distanceToDisplay(distance) + '公里'
}