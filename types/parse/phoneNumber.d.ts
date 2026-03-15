/**
 * 解析电话号码
 *
 * @group Function
 * @category Parse
 * @param value 电话号码字符串
 * @returns 如果是手机号码，返回 PHONE_NUMBER_MOBILE；如果是固定电话，返回 PHONE_NUMBER_LANDLINE；如果是400电话，返回 PHONE_NUMBER_400；否则返回 -1
 */
export declare function parsePhoneNumber(value: string): number;
