/**
 * 获取字符串长度
 *
 * 注意：中文算 1 个字符
 *
 * @param str 要截断的字符串
 * @returns 字符串长度
 */
export declare function getStringLength(str: string): number;
/**
 * 移除字符串开头和结尾的空白符
 *
 * @param str 要截断的字符串
 * @returns 移除空白符后的字符串
 */
export declare function trimString(str: string): string;
/**
 * 截取字符串
 *
 * @param str 要截断的字符串
 * @param start 开始索引
 * @param end 结束索引
 * @returns 截取后的字符串
 */
export declare function sliceString(str: string, start: number, end: number): string;
/**
 * 截断字符串，最多显示 maxLength 个字符，超过部分用省略号表示
 *
 * @param str 要截断的字符串
 * @param maxLength 最大长度
 * @returns 截断后的字符串
 */
export declare function truncateString(str: string, maxLength: number): string;
/**
 * 生成指定长度的随机字符串
 *
 * @param length 随机字符串长度
 * @param chars 随机字符集
 * @returns 随机字符串
 */
export declare function randomString(length: number, chars?: string): string;
/**
 * 渲染字符串模板
 *
 * @param str 字符串模板，例如：'你好，${name}'
 * @param data 数据对象，例如：{ name: '张三' }
 * @returns 渲染后的字符串，例如：'你好，张三'
 */
export declare function renderStringTemplate(str: string, data: Record<string, any>): string;
/**
 * 编码 URI 组件
 *
 * @param str 要编码的字符串
 * @returns 编码后的字符串
 */
export declare function encodeURIComponent(str: string): string;
/**
 * 解码 URI 组件
 *
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 */
export declare function decodeURIComponent(str: string): string;
