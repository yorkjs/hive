import { AUTH_CODE_ALIPAY, AUTH_CODE_WECHAT } from '../constant/authCode'

/**
 * 解析付款码
 *
 * @group Function
 * @category Parse
 * @param value 付款码字符串
 * @returns 如果是微信付款码，返回 AUTH_CODE_WECHAT；如果是支付宝付款码，返回 AUTH_CODE_ALIPAY；否则返回 -1
 */
export function parseAuthCode(value: string): number {

  // 微信支付通常以 10-15 开头、18 位纯数字
  if (/^1[0-5]/.test(value)
    && /^\d{18}$/.test(value)
  ) {
    return AUTH_CODE_WECHAT
  }

  // 支付宝通常以 25-30 开头、18-25 位纯数字
  if ((/^2[5-9]/.test(value) || /^30/.test(value))
    && /^\d{18,25}$/.test(value)
  ) {
    return AUTH_CODE_ALIPAY
  }

  return -1
}