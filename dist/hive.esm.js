/**
 * hive.js v0.0.5
 * (c) 2025 yorkjs team
 * Released under the MIT License.
 */

import dayjs from 'dayjs';

// 年月日：2020-10-01
const DATE_YEAR_MONTH_DATE = 'YYYY-MM-DD';
// 月日：10-01
const DATE_MONTH_DATE = 'MM-DD';

// 年月日 时分秒：2020-10-01 10:00:00
const DATE_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
// 年月日 时分：2020-10-01 10:00
const DATE_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';

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
* 精确加法，比如 plusNumber(3, 1) === 4
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
* 精确减法，比如 minusNumber(3, 1) === 2
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
 * 精确乘法，比如 timesNumber(3, 2) === 6
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
* 精确除法，比如 divideNumber(6, 2) === 3
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
    // 计算 (v1 * m2) / (v2 * m1)，避免过大数值
    const dividend = v1 * m2;
    const divisor = v2 * m1;
    // 先进行 BigInt 除法，再调整精度
    const quotient = dividend / divisor;
    const remainder = dividend % divisor;
    // 如果余数为 0，直接返回整数部分
    if (remainder === 0n) {
        return Number(quotient);
    }
    // 否则，计算小数部分（使用额外倍数）
    const precision = 1e12; // 足够大的倍数，但避免溢出
    const scaledRemainder = remainder * BigInt(precision);
    const decimalPart = Number(scaledRemainder / divisor) / precision;
    return Number(quotient) + decimalPart;
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
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
function formatDate(timestamp) {
    return dayjs(timestamp).format(DATE_YEAR_MONTH_DATE);
}
/**
 * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
function formatDateShortly(timestamp) {
    const t1 = dayjs(timestamp);
    const t2 = dayjs(Date.now());
    if (t1.year() === t2.year()) {
        return t1.format(DATE_MONTH_DATE);
    }
    return dayjs(timestamp).format(DATE_YEAR_MONTH_DATE);
}

/**
 * 把时间戳格式化为 2020-10-01 10:00:00 格式
 *
 * @param timestamp
 * @param format 默认是 年月日 时分秒 格式
 * @returns
 */
function formatDateTime(timestamp, format = DATE_YEAR_MONTH_DATE_HOUR_MINUTE) {
    return dayjs(timestamp).format(format);
}

/**
 * 把单位为 分 的金额转成显示友好的格式
 *
 * @param value
 * @param maxDecimals
 * @returns
 */
function formatMoney(value, maxDecimals = 2) {
    // 转成 元 为单位
    const newValue = divideNumber(value, 100);
    const parts = ('' + newValue).split('.');
    let list = [], end = parts[0].length - 1;
    for (let i = end; i >= 0; i--) {
        if (i !== end && (end - i) % 3 === 0) {
            list.push(',');
        }
        list.push(parts[0].charAt(i));
    }
    let money = list.reverse().join('');
    let decimal = parts[1];
    if (decimal) {
        if (maxDecimals > 0) {
            decimal = decimal.padEnd(maxDecimals, '0');
            if (decimal.length > maxDecimals) {
                decimal = decimal.slice(0, maxDecimals);
            }
        }
    }
    else if (maxDecimals > 0) {
        decimal = ''.padEnd(maxDecimals, '0');
    }
    if (decimal) {
        money += '.' + decimal;
    }
    return money;
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

export { DATE_MONTH_DATE, DATE_YEAR_MONTH_DATE, DATE_YEAR_MONTH_DATE_HOUR_MINUTE, DATE_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND, MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND, MS_WEEK, MS_YEAR, divideNumber, formatDate, formatDateShortly, formatDateTime, formatMoney, isCustomBarcode, isStandardBarcode, minusNumber, moneyToBackend, moneyToDisplay, normalizeVersion, plusNumber, rateToBackend, rateToDisplay, timesNumber };
//# sourceMappingURL=hive.esm.js.map
