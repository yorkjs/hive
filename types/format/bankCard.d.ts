/**
 * 格式化银行卡号
 *
 * @group Function
 * @category Format
 * @param value 银行卡号
 * @param masked 是否脱敏显示，默认脱敏
 * @returns 格式化后的字符串
 * @example
 * formatBankCardNumber('1111222233334444') // **** **** **** 4444
 * formatBankCardNumber('1111222233334444', false) // 1111 2222 3333 4444
 */
export declare function formatBankCardNumber(value: string, masked?: boolean): string;
