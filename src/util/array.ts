// filter
export function filter<T>(arr: T[], fn: (item: T, index: number, array: T[]) => boolean) {
  return arr.filter(fn)
}

// findIndex
export function findIndex<T>(arr: T[], fn: (item: T, index: number, array: T[]) => boolean) {
  return arr.findIndex(fn)
}

// findLastIndex
export function findLastIndex<T>(arr: T[], fn: (item: T, index: number, array: T[]) => boolean) {
  return arr.findLastIndex(fn)
}

// indexOf
export function indexOf<T>(arr: T[], item: T, fromIndex?: number) {
  return arr.indexOf(item, fromIndex)
}

// lastIndexOf
export function lastIndexOf<T>(arr: T[], item: T, fromIndex?: number) {
  return arr.lastIndexOf(item, fromIndex == null ? -1 : fromIndex)
}

// chunk
export function chunk<T>(arr: T[], size: number): T[][] {
  return arr.reduce((acc, cur, i) => {
    if (i % size === 0) acc.push([cur])
    else acc[acc.length - 1].push(cur)
    return acc
  }, [] as T[][])
}