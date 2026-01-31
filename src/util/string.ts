/**
 * 截断字符串，最多显示 maxLength 个字符，超过部分用省略号表示
 *
 * @param str 要截断的字符串
 * @param maxLength 最大长度
 * @returns 截断后的字符串
 */
export function truncateString(str: string, maxLength: number) {
    if (str.length <= maxLength) {
        return str
    }

    if (maxLength <= 3) {
        return str.slice(0, maxLength)
    }

    return str.slice(0, maxLength - 3) + '...'
}