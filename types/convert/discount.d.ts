/**
 * 万分比 转换为 折扣，最多保留 1 位小数
 *
 * @param value 后端的比例值
 * @returns
 */
export declare function discountToDisplay(value: number): number;
/**
 * 折扣 转换为 万分比
 *
 * @param value 前端的比例值
 * @returns
 */
export declare function discountToBackend(value: number): number;
