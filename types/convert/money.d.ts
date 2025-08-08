/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
export declare function moneyToDisplay(value: number, unit?: number): number;
/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值
 * @returns
 */
export declare function moneyToBackend(value: number, unit?: number): number;
