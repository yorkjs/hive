/**
 * 计算短信的预估字符数和短信条数
 *
 * @group Function
 * @category Util
 * @param signatureName 签名内容（不含方括号）
 * @param templateContent 模板正文
 * @param perSmsCharCount 每条短信允许的最大字符数
 * @returns [总字符数, 短信条数]
 */
export declare function calculateSmsCount(signatureName: string, templateContent: string, perSmsCharCount: number): [number, number];
