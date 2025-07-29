/**
 * 毫克 转换为 克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export declare function weightToG(value: number): number;
/**
 * 毫克 转换为 千克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
export declare function weightToKG(value: number): number;
/**
 * 克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是克
 * @returns
 */
export declare function weightGToBackend(value: number): number;
/**
 * 千克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是千克
 * @returns
 */
export declare function weightKGToBackend(value: number): number;
