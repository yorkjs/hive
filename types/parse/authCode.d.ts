/**
 * 解析付款码
 *
 * @group Function
 * @category Parse
 * @param value 付款码字符串
 * @returns 如果是微信付款码，返回 AUTH_CODE_WECHAT；如果是支付宝付款码，返回 AUTH_CODE_ALIPAY；否则返回 -1
 */
export declare function parseAuthCode(value: string): number;
