/**
 * 是否是标准商品条形码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否是标准商品条形码
 * @example
 * isStandardBarcode('6901234567890') // true
 */
export declare function isStandardBarcode(value: string): boolean;
/**
 * 是否是自定义商品条形码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否是自定义商品条形码
 * @example
 * isCustomBarcode('6901234567890') // false
 */
export declare function isCustomBarcode(value: string): boolean;
