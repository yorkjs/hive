/**
 * 编码 URI 组件
 *
 * @param str 要编码的字符串
 * @returns 编码后的字符串
 */
export declare function encodeUriComponent(str: string): string;
/**
 * 解码 URI 组件
 *
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 */
export declare function decodeUriComponent(str: string): string;
/**
 * 标准化 URL：确保包含协议部分
 *
 * @param url 要标准化的 URL
 * @returns 标准化后的 URL
 */
export declare function normalizeUrl(url: string): string;
/**
 * 将 URL 转换为协议相对路径（以 // 开头）
 *
 * @param url 要转换的 URL
 * @returns 协议相对路径
 */
export declare function toProtocolRelativeUrl(url: string): string;
