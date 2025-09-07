import { SIZE_GB, SIZE_KB, SIZE_MB } from '../constant/size'
import { isInteger } from '../is/number'
import { divideNumber, truncateNumber } from '../util/number'

export function formatSize(value: number) {
  if (value >= SIZE_GB) {
    const result = divideNumber(value, SIZE_GB)
    return `${truncateNumber(result, isInteger(result) ? 0 : 2)}GB`
  }
  else if (value >= SIZE_MB) {
    const result = divideNumber(value, SIZE_MB)
    return `${truncateNumber(result, isInteger(result) ? 0 : 2)}MB`
  }
  else if (value >= SIZE_KB) {
    const result = divideNumber(value, SIZE_KB)
    return `${truncateNumber(result, isInteger(result) ? 0 : 2)}KB`
  }
  return `${value}B`
}