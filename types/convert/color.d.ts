interface IRgba {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
interface IHsl {
    hue: number;
    saturation: number;
    lightness: number;
}
/**
 * 将 HEX 颜色转换为 RGBA 对象
 *
 * @param color HEX 颜色值
 * @returns RGBA 颜色对象
 */
export declare function hexToRgbaObject(color: string): IRgba;
/**
 * 将 HEX 颜色转换为 HSL 对象
 *
 * @param color HEX 颜色值
 * @returns HSL 颜色对象
 */
export declare function hexToHslObject(color: string): IHsl;
/**
 * 将 HEX 颜色转换为 RGBA 格式
 *
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 0-1
 * @returns RGBA 颜色字符串
 */
export declare function hexToRgbaString(color: string, alpha: number): string;
/**
 * 加深颜色亮度
 *
 * @param color HEX 颜色值
 * @param offset 加深幅度，取值范围 0-1
 * @returns 新的 hex 颜色
 */
export declare function darkenColor(color: string, offset: number): string;
/**
 * 减淡颜色亮度
 *
 * @param color HEX 颜色值
 * @param offset 减淡幅度，取值范围 0-1
 * @returns 新的 hex 颜色
 */
export declare function lightenColor(color: string, offset: number): string;
export {};
