import { divideNumber, hasDecimal, truncateNumber } from './number'

// 此文件的函数仅在内部使用，不对外暴露

/**
 * 以较短的方式返回数字，避免 UI 层显示不下所有数字
 *
 * @param value
 * @param decimals
 * @returns
 */
export function shortNumber(value: number, formatUnshort: (value: number) => string) {
  if (value >= 1000000000000) {
    const trillion = divideNumber(value, 1000000000000)
    return truncateNumber(trillion, hasDecimal(trillion) ? 1 : 0) + '万亿'
  }
  if (value >= 100000000) {
    const billion = divideNumber(value, 100000000)
    return truncateNumber(billion, hasDecimal(billion) ? 1 : 0) + '亿'
  }
  if (value >= 10000) {
    const tenThousand = divideNumber(value, 10000)
    return truncateNumber(tenThousand, hasDecimal(tenThousand) ? 1 : 0) + '万'
  }
  return formatUnshort(value)
}