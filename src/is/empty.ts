
// 优化：使用更精确的空字符串类型
type EmptyString = '' | '  '

type EmptyValue =
  | null
  | undefined
  | EmptyString
  | never[]
  | Record<PropertyKey, never>
  | Map<PropertyKey, never>
  | Set<never>

// 空值: {}, [], '', '   ', null, undefined, NaN, 空 Map, 空 Set
export function isEmpty(value: unknown): value is EmptyValue {
  // 快速检查 null 和 undefined
  if (value == null) {
    return true
  }

  if (typeof value === 'string') {
    // 字符串：检查是否为空或只包含空格
    return value.trim().length === 0
  }

  if (typeof value === 'number') {
    // 数字：检查是否为 NaN
    return isNaN(value)
  }

  if (Array.isArray(value)) {
    // 数组：检查长度是否为 0
    return value.length === 0
  }

  if (typeof value === 'object') {
    // Map 和 Set 类型
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0
    }

    // 对象：检查是否为空对象
    const protoType = Object.prototype.toString.call(value)
    if (protoType === '[object Object]') {
      return Object.keys(value).length === 0
    }
  }

  // 其他类型默认为非空
  return false
}