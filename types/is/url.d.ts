/**
 * 是否为 URL，仅支持 http、https 协议
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为 URL
 * @example
 * isUrl('http://www.baidu.com') // true
 * isUrl('https://www.baidu.com') // true
 * isUrl('www.baidu.com') // false
 */
export declare function isUrl(value: string): boolean;
