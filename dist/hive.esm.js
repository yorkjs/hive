/**
 * hive.js v0.0.2
 * (c) 2025 yorkjs team
 * Released under the MIT License.
 */

// 毫秒数：秒
const MS_SECOND = 1000;
// 毫秒数：分钟
const MS_MINUTE = 60 * MS_SECOND;
// 毫秒数：小时
const MS_HOUR = 60 * MS_MINUTE;
// 毫秒数：天
const MS_DAY = 24 * MS_HOUR;
// 毫秒数：周
const MS_WEEK = 7 * MS_DAY;
// 毫秒数：年
const MS_YEAR = 365 * MS_DAY;

/**
 * 此模块用于整数和浮点数的精确计算，避免浮点数的计算精度问题
 */
/**
 * 获取数字的小数位数
 *
 * @param num 要检查的数字
 * @returns 小数位数
 */
function getDecimalDigits(num) {
    const decimalStr = num.toString().split('.')[1];
    return decimalStr ? decimalStr.length : 0;
}
/**
 * 将数字转换为整数，消除小数部分
 *
 * @param num 要转换的数字
 * @returns 包含整数和倍数的对象
 */
function convertToInteger(num) {
    const decimalDigits = getDecimalDigits(num);
    const multiple = 10 ** decimalDigits;
    return {
        value: BigInt(Math.round(num * multiple)),
        multiple: BigInt(multiple),
    };
}
/**
* 精确加法，比如 plus(3, 1) === 4
*
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
function plusNumber(value1, value2) {
    const { value: v1, multiple: m1 } = convertToInteger(value1);
    const { value: v2, multiple: m2 } = convertToInteger(value2);
    const commonMultiple = m1 > m2 ? m1 : m2;
    const adjustedV1 = v1 * (commonMultiple / m1);
    const adjustedV2 = v2 * (commonMultiple / m2);
    return Number(adjustedV1 + adjustedV2) / Number(commonMultiple);
}
/**
* 精确减法，比如 minus(3, 1) === 2
*
* @param value1 被减数
* @param value2 减数
* @returns 差
*/
function minusNumber(value1, value2) {
    const { value: v1, multiple: m1 } = convertToInteger(value1);
    const { value: v2, multiple: m2 } = convertToInteger(value2);
    const commonMultiple = m1 > m2 ? m1 : m2;
    const adjustedV1 = v1 * (commonMultiple / m1);
    const adjustedV2 = v2 * (commonMultiple / m2);
    return Number(adjustedV1 - adjustedV2) / Number(commonMultiple);
}
/**
 * 精确乘法，比如 times(3, 2) === 6
 *
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
function timesNumber(value1, value2) {
    const { value: v1, multiple: m1 } = convertToInteger(value1);
    const { value: v2, multiple: m2 } = convertToInteger(value2);
    const product = v1 * v2;
    const divisor = m1 * m2;
    return Number(product) / Number(divisor);
}
/**
* 精确除法，比如 divide(6, 2) === 3
*
* @param value1 被除数
* @param value2 除数
* @returns 商
*/
function divideNumber(value1, value2) {
    if (value2 === 0) {
        throw new Error('Division by zero');
    }
    const { value: v1, multiple: m1 } = convertToInteger(value1);
    const { value: v2, multiple: m2 } = convertToInteger(value2);
    // 增加足够的倍数以确保足够的精度
    const commonMultiple = BigInt(1e18); // 足够大的倍数
    const dividend = v1 * commonMultiple * m2;
    const divisor = v2 * m1;
    return Number(dividend) / Number(divisor) / Number(commonMultiple);
}

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
function moneyToDisplay(value) {
    return divideNumber(value, 100);
}
/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值，单位是元
 * @returns
 */
function moneyToBackend(value) {
    return timesNumber(value, 100);
}

/**
 * 比例转换为前端显示所用的格式
 *
 * @param value 后端的比例值
 * @returns
 */
function rateToDisplay(value) {
    return divideNumber(value, 100);
}
/**
 * 比例转换为后端接口所用的格式
 *
 * @param value 前端的比例值
 * @returns
 */
function rateToBackend(value) {
    return timesNumber(value, 100);
}

/**
 * value 是否是标准商品条形码
 *
 * @param value 条形码文本
 * @returns
 */
function isStandardBarcode(value) {
    // EAN 码：通常是69开头，13位数字
    // UPC 码：通常以0开头，12位数字
    const length = value.length;
    if (length === 8 || length === 12 || length === 13 || length === 14) {
        return /^\d+$/.test(value);
    }
    return false;
}
/**
 * value 是否是自定义商品条形码
 *
 * @param value 条形码文本
 * @returns
 */
function isCustomBarcode(value) {
    // 自定义条码，规则为 大写字母开头跟 10-12 个数字
    if (/^[A-Z]\d{10,12}$/.test(value)) {
        return true;
    }
    // 这里留给以后加其他规则
    return false;
}

/**
 * 标准化版本号，方便后续进行比较
 *
 * @param {string} version 如 '1.2.3'，最多支持三段，每段的子版本号不超过 9999
 * @returns 标准化后的版本号，12 位长度
 */
function normalizeVersion(version) {
    const tokens = version && version.split('.');
    switch (tokens.length) {
        case 1:
            return tokens[0].padStart(12, '0');
        case 2:
            return tokens[0].padStart(6, '0') + tokens[1].padStart(6, '0');
        case 3:
            return tokens[0].padStart(4, '0') + tokens[1].padStart(4, '0') + tokens[2].padStart(4, '0');
    }
    return '000000000000';
}

export { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND, MS_WEEK, MS_YEAR, divideNumber, isCustomBarcode, isStandardBarcode, minusNumber, moneyToBackend, moneyToDisplay, normalizeVersion, plusNumber, rateToBackend, rateToDisplay, timesNumber };
//# sourceMappingURL=hive.esm.js.map
