/**
 * 获取字符串字符数量
 *
 * 注意：中文和英文都算 1 个字符
 *
 * @param str 目标字符串
 * @returns 字符串字符数量
 */
export declare function getStringLength(str: string): number;
/**
 * 获取字符串宽度，此函数常用于排版辅助计算
 *
 * 注意：中文算 2 个单位，英文数字算 1 个单位
 *
 * @param str 目标字符串
 * @returns 字符串宽度
 */
export declare function getStringWidth(str: string): number;
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
 * 渲染字符串模板
 *
 * @param str 字符串模板，例如：'你好，${name}'
 * @param data 数据对象，例如：{ name: '张三' }
 * @returns 渲染后的字符串，例如：'你好，张三'
 */
export declare function renderStringTemplate(str: string, data: Record<string, any>): string;
/**
 * 补全字符串开头，不足 length 个字符用 0 填充
 *
 * @param str 要补全的字符串
 * @param length 目标长度
 * @returns 补全后的字符串
 */
export declare function padStringStart(str: string, length: number): string;
/**
 * 判断字符串是否包含特殊字符
 *
 * @param str 目标字符串
 * @returns 是否包含特殊字符
 */
export declare function hasSpecialCharacters(str: string): boolean;
/**
 * 移除字符串中的特殊字符
 *
 * @param str 目标字符串
 * @returns 清理后的字符串
 */
export declare function removeSpecialCharacters(str: string): string;
