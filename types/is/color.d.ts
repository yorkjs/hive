/**
 * 是否为十六进制颜色
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为十六进制颜色
 * @example
 * isHexColor('#666') // true
 * isHexColor('#666666') // true
 * isHexColor('#66666666') // true 注意，这是一个 RGBA 颜色
 */
export declare function isHexColor(value: string): boolean;
