interface IRgba {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色对象
 */
export declare function hexToRgbaObject(color: string, alpha: number): IRgba;
/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色字符串
 */
export declare function hexToRgbaString(color: string, alpha: number): string;
export {};
