/**
 * 重量转换为前端显示所用的格式
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export declare function weightToG(value: number): number;
export declare function weightToKG(value: number): number;
/**
 * 重量转换为后端接口所用的格式
 *
 * @param value 前端的重量值
 * @returns
 */
export declare function weightToBackend(value: number): number;
