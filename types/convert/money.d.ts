/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
export declare function moneyToDisplay(value: number): number;
/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是元
 * @returns
 */
export declare function moneyYuanToBackend(value: number): number;
/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是万元
 * @returns
 */
export declare function moneyTenThousandYuanToBackend(value: number): number;
