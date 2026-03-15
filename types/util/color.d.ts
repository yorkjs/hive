/**
 * RGBA 对象
 */
interface IRgba {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
/**
 * HSL 对象
 */
interface IHsl {
    hue: number;
    saturation: number;
    lightness: number;
}
/**
 * 将 HEX 颜色转换为 RGBA 对象
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @returns RGBA 颜色对象
 * @example
 * hexToRgbaObject('#FF0000') // { red: 255, green: 0, blue: 0, alpha: 1 }
 * hexToRgbaObject('#FF000000') // { red: 255, green: 0, blue: 0, alpha: 0 }
 */
export declare function hexToRgbaObject(color: string): IRgba;
/**
 * 将 HEX 颜色转换为 HSL 对象
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @returns HSL 颜色对象
 * @example
 * hexToHslObject('#FF0000') // { hue: 0, saturation: 100, lightness: 50 }
 */
export declare function hexToHslObject(color: string): IHsl;
/**
 * 将 HEX 颜色转换为 RGBA 字符串格式
 *
 * 使用场景是给颜色应用一个新的透明度
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @param alpha 透明度，取值范围 [0, 1]
 * @returns RGBA 颜色字符串
 * @example
 * hexToRgbaString('#FF0000', 0.5) // rgba(255,0,0,0.5)
 */
export declare function hexToRgbaString(color: string, alpha: number): string;
/**
 * 加深颜色亮度
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @param offset 加深幅度，取值范围 [0, 1]
 * @returns 新的 hex 颜色
 * @example
 * darkenColor('#999999', 0.1) // #808080
 * darkenColor('#999999', 0.2) // #666666
 */
export declare function darkenColor(color: string, offset: number): string;
/**
 * 减淡颜色亮度
 *
 * @group Function
 * @category Util
 * @param color HEX 颜色值
 * @param offset 减淡幅度，取值范围 [0, 1]
 * @returns 新的 hex 颜色
 * @example
 * lightenColor('#999999', 0.1) // #B3B3B3
 * lightenColor('#999999', 0.2) // #CCCCCC
 */
export declare function lightenColor(color: string, offset: number): string;
export {};
