/**
 * hive.js v0.3.5
 * (c) 2025-2026 yorkjs team
 * Released under the MIT License.
 */

import * as NP from 'number-precision';
import dayjs from 'dayjs';

// 微信付款码
const AUTH_CODE_WECHAT = 1;
// 支付宝付款码
const AUTH_CODE_ALIPAY = 2;

// 年：2020
const YEAR_DEFAULT = 'YYYY';
// 中文版
const YEAR_CHINESE = 'YYYY年';

// 月：2020-10
const MONTH_DEFAULT = 'YYYY-MM';
// 中文版
const MONTH_CHINESE = 'YYYY年M月';

// 年月日：2020-10-01
const DATE_YEAR_MONTH_DATE = 'YYYY-MM-DD';
// 月日：10-01
const DATE_MONTH_DATE = 'MM-DD';
// 年月日：2020/10/01
const DATE_YEAR_MONTH_DATE_SLASH = 'YYYY/MM/DD';
// 月日：10/01
const DATE_MONTH_DATE_SLASH = 'MM/DD';
// 年月日：2020.10.01
const DATE_YEAR_MONTH_DATE_DOT = 'YYYY.MM.DD';
// 月日：10.01
const DATE_MONTH_DATE_DOT = 'MM.DD';
// 年月日：2020年10月1日
const DATE_YEAR_MONTH_DATE_CHINESE = 'YYYY年M月D日';
// 月日：10月1日
const DATE_MONTH_DATE_CHINESE = 'M月D日';

// 年月日 时分秒：2020-10-01 10:00:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
// 年月日 时分：2020-10-01 10:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';
// 月日 时分：10-01 10:00
const DATE_TIME_MONTH_DATE_HOUR_MINUTE = 'MM-DD HH:mm';
// 年月日 时分秒：2020/10/01 10:00:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH = 'YYYY/MM/DD HH:mm:ss';
// 年月日 时分：2020/10/01 10:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH = 'YYYY/MM/DD HH:mm';
// 月日 时分：10/01 10:00
const DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH = 'MM/DD HH:mm';
// 年月日 时分秒：2020.10.01 10:00:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT = 'YYYY.MM.DD HH:mm:ss';
// 年月日 时分：2020.10.01 10:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT = 'YYYY.MM.DD HH:mm';
// 月日 时分：10.01 10:00
const DATE_TIME_MONTH_DATE_HOUR_MINUTE_DOT = 'MM.DD HH:mm';
// 年月日 时分秒：2020/10/01 10:00:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE = 'YYYY年M月D日 HH:mm:ss';
// 年月日 时分：2020/10/01 10:00
const DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE = 'YYYY年M月D日 HH:mm';
// 月日 时分：10/01 10:00
const DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE = 'M月D日 HH:mm';

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

// 元 转 分
const MONEY_YUAN_TO_CENT = 100;
// 万元 转 分
const MONEY_TEN_THOUSAND_YUAN_TO_CENT = 10000 * MONEY_YUAN_TO_CENT;
// 元 转 厘
const MONEY_YUAN_TO_PENNY = 1000;

// 手机号
const PHONE_NUMBER_MOBILE = 1;
// 固定电话
const PHONE_NUMBER_LANDLINE = 2;
// 400 电话
const PHONE_NUMBER_400 = 3;

// 保质期：日
const SHELF_LIFE_DAY = 24;
// 保质期：月
const SHELF_LIFE_MONTH = 30 * SHELF_LIFE_DAY;
// 保质期：年
const SHELF_LIFE_YEAR = 365 * SHELF_LIFE_DAY;

// 体积：KB
const SIZE_KB = 1024;
// 体积：MB
const SIZE_MB = 1024 * SIZE_KB;
// 体积：GB
const SIZE_GB = 1024 * SIZE_MB;

/**
 * 是否为整数
 *
 * @param value
 * @returns
 */
function isInteger(value) {
    return value % 1 === 0;
}

/**
* 精确加法，比如 plusNumber(3, 1) === 4
*
* @param value1 第一个值
* @param value2 第二个值
* @returns 和
*/
function plusNumber(value1, value2) {
    return NP.plus(value1, value2);
}
/**
* 精确减法，比如 minusNumber(3, 1) === 2
*
* @param value1 被减数
* @param value2 减数
* @returns 差
*/
function minusNumber(value1, value2) {
    return NP.minus(value1, value2);
}
/**
 * 精确乘法，比如 timesNumber(3, 2) === 6
 *
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 乘积结果
 */
function timesNumber(value1, value2) {
    return NP.times(value1, value2);
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
        throw new Error('Divisor cannot be zero');
    }
    return NP.divide(value1, value2);
}
/**
 * 截断数字，解决 1.983.toFixed(1) 为 2.0 的问题
 *
 * @param value
 * @param decimals
 * @returns
 */
function truncateNumber(value, decimals = 0) {
    let [integerPart, decimalPart] = value.toString().split('.');
    if (decimals === 0) {
        return integerPart;
    }
    if (!decimalPart) {
        return `${integerPart}.${''.padEnd(decimals, '0')}`;
    }
    const truncatedDecimal = decimalPart.length > decimals
        ? decimalPart.substring(0, decimals)
        : decimalPart.padEnd(decimals, '0');
    return `${integerPart}.${truncatedDecimal}`;
}
/**
 * 以较短的方式返回数字，避免 UI 层显示不下所有数字
 *
 * @param value
 * @param decimals
 * @returns
 */
function shortNumber(value, formatUnshort) {
    if (value >= 1000000000000) {
        const trillion = divideNumber(value, 1000000000000);
        return truncateNumber(trillion, isInteger(trillion) ? 0 : 1) + '万亿';
    }
    if (value >= 100000000) {
        const billion = divideNumber(value, 100000000);
        return truncateNumber(billion, isInteger(billion) ? 0 : 1) + '亿';
    }
    if (value >= 10000) {
        const tenThousand = divideNumber(value, 10000);
        return truncateNumber(tenThousand, isInteger(tenThousand) ? 0 : 1) + '万';
    }
    return formatUnshort(value);
}

/**
 * 万分比 转换为 折扣，最多保留 1 位小数
 *
 * @param value 后端的比例值
 * @returns
 */
function discountToDisplay(value) {
    const result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    // 如果有小数，保留 1 位小数
    return isInteger(result)
        ? Math.floor(result)
        : +truncateNumber(result, 1);
}
/**
 * 折扣 转换为 万分比
 *
 * @param value 前端的比例值
 * @returns
 */
function discountToBackend(value) {
    return timesNumber(isInteger(value)
        ? value
        : +truncateNumber(value, 1), 1000);
}

/**
 * 米 转换为 千米
 *
 * @param value 后端的比例值
 * @returns
 */
function distanceToDisplay(value) {
    const result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
}
/**
 * 千米 转换为 米
 *
 * @param value 前端的比例值
 * @returns
 */
function distanceToBackend(value) {
    return timesNumber(value, 1000);
}
// 定义地球半径（单位：米）
const EARTH_RADIUS_M = 6371 * 1000;
// 将角度转换为弧度
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
/**
 * 计算两个点之间的距离，返回距离单位是米
 *
 * @param longitude1 第一个点的经度
 * @param latitude1 第一个点的纬度
 * @param longitude2 第二个点的经度
 * @param latitude2 第二个点的纬度
 * @returns
 */
function calculateDistance(longitude1, latitude1, longitude2, latitude2) {
    // 将经纬度转换为弧度
    const lat1 = toRadians(latitude1);
    const lon1 = toRadians(longitude1);
    const lat2 = toRadians(latitude2);
    const lon2 = toRadians(longitude2);
    // 计算差值
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    // Haversine 公式
    const a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) *
            Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // 计算距离
    return Math.floor(EARTH_RADIUS_M * c);
}

/**
 * 把金额转换为前端显示所用的格式
 *
 * @param value 后端的金额值，单位是分
 * @returns
 */
function moneyToDisplay(value, unit = MONEY_YUAN_TO_CENT) {
    return divideNumber(value, unit);
}
/**
 * 把金额转换为后端接口所用的格式
 *
 * @param value 前端的金额值
 * @returns
 */
function moneyToBackend(value, unit = MONEY_YUAN_TO_CENT) {
    return timesNumber(value, unit);
}

/**
 * 万分比 转换为 百分比
 *
 * @param value 后端的比例值
 * @returns
 */
function rateToDisplay(value) {
    const result = divideNumber(value, 100);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
}
/**
 * 百分比 转换为 万分比
 *
 * @param value 前端的比例值
 * @returns
 */
function rateToBackend(value) {
    return timesNumber(value, 100);
}
/**
 * 计算万分比
 *
 * @param value1 除数
 * @param value2 被除数
 * @returns
 */
function calculateRate(value1, value2) {
    if (!value2) {
        return 0;
    }
    const result = divideNumber(value1 * 10000, value2);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
}

/**
 * 毫克 转换为 克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
function weightToG(value) {
    return divideNumber(value, 1000);
}
/**
 * 毫克 转换为 千克
 *
 * @param value 后端的重量值，单位毫克
 * @returns
 */
function weightToKG(value) {
    return divideNumber(value, 1000000);
}
/**
 * 克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是克
 * @returns
 */
function weightGToBackend(value) {
    return timesNumber(value, 1000);
}
/**
 * 千克 转为后端使用的 毫克
 *
 * @param value 前端的重量值，单位是千克
 * @returns
 */
function weightKGToBackend(value) {
    return timesNumber(value, 1000000);
}

const provinceMap = {
    '北京市': '北京',
    '上海市': '上海',
    '天津市': '天津',
    '重庆市': '重庆',
};
const cityMap = {
    '省直辖县级行政区划': '省直辖',
    '自治区直辖县级行政区划': '省直辖',
    // 云南
    '楚雄彝族自治州': '楚雄',
    '红河哈尼族彝族自治州': '红河',
    '文山壮族苗族自治州': '文山',
    '西双版纳傣族自治州': '西双版纳',
    '大理白族自治州': '大理',
    '德宏傣族景颇族自治州': '德宏',
    '怒江傈僳族自治州': '怒江',
    '迪庆藏族自治州': '迪庆',
    // 湖北
    '恩施土家族苗族自治州': '恩施',
    // 湖南
    '湘西土家族苗族自治州': '湘西',
    // 甘肃
    '临夏回族自治州': '临夏',
    '甘南藏族自治州': '甘南',
    // 内蒙古
    '兴安盟': '兴安',
    '锡林郭勒盟': '锡林郭勒',
    '阿拉善盟': '阿拉善',
    // 青海
    '海北藏族自治州': '海北',
    '黄南藏族自治州': '黄南',
    '海南藏族自治州': '海南州',
    '果洛藏族自治州': '果洛',
    '玉树藏族自治州': '玉树',
    '海西蒙古族藏族自治州': '海西',
    // 吉林
    '延边朝鲜族自治州': '延边',
    // 四川
    '阿坝藏族羌族自治州': '阿坝',
    '甘孜藏族自治州': '甘孜',
    '凉山彝族自治州': '凉山',
    // 新疆
    '昌吉回族自治州': '昌吉',
    '博尔塔拉蒙古自治州': '博尔塔拉',
    '巴音郭楞蒙古自治州': '巴音郭楞',
    '阿克苏地区': '阿克苏',
    '克孜勒苏柯尔克孜自治州': '克孜勒苏柯尔克孜',
    '喀什地区': '喀什',
    '和田地区': '和田',
    '伊犁哈萨克自治州': '伊犁',
    '塔城地区': '塔城',
    '阿勒泰地区': '阿勒泰',
    // 贵州
    '黔西南布依族苗族自治州': '黔西南',
    '黔东南苗族侗族自治州': '黔东南',
    '黔南布依族苗族自治州': '黔南',
};
function formatArea(area, options = { simplify: true }) {
    const { country, province, city, district, address, } = area;
    const list = [];
    let prevItem = '';
    const appendItem = function (item) {
        list.push(item);
        prevItem = item;
    };
    let isChina = false;
    const isSimplify = options.simplify;
    const separator = isSimplify ? ' ' : '';
    if (country) {
        const item = country.name;
        appendItem(item);
        if (item === '中国') {
            isChina = true;
        }
    }
    if (province) {
        appendItem(isSimplify ? formatProvince(province.name) : province.name);
    }
    if (city) {
        const item = isSimplify ? formatCity(city.name) : city.name;
        if (item && item !== '市辖区' && item !== '县'
            && item !== '省直辖' && item !== prevItem) {
            appendItem(item);
        }
    }
    if (district) {
        const item = isSimplify ? formatDistrict(district.name) : district.name;
        if (item) {
            appendItem(item);
        }
    }
    if (address) {
        appendItem(address);
    }
    if (list.length > 1 && isChina) {
        // 删掉中国
        list.shift();
    }
    return list.join(separator);
}
function formatProvince(name) {
    if (provinceMap[name]) {
        return provinceMap[name];
    }
    if (name.endsWith('省') || name.endsWith('州')) {
        return name.slice(0, -1);
    }
    if (name.startsWith('新疆')
        || name.startsWith('西藏')
        || name.startsWith('宁夏')
        || name.startsWith('广西')
        || name.startsWith('香港')
        || name.startsWith('澳门')) {
        return name.slice(0, 2);
    }
    if (name.startsWith('内蒙古')) {
        return name.slice(0, 3);
    }
    return name;
}
function formatCity(name) {
    // 有时候会把港澳台放到城市这级显示
    if (name.startsWith('中国')) {
        name = name.substring(2);
    }
    if (cityMap[name]) {
        return cityMap[name];
    }
    if (name.endsWith('市')) {
        return name.slice(0, -1);
    }
    if (name.endsWith('地区')) {
        return name.slice(0, -2);
    }
    if (name.endsWith('自治州')) {
        return name.slice(0, -3);
    }
    return name;
}
function formatDistrict(name) {
    if (name === '市辖区') {
        return '';
    }
    // 不要处理区，会影响有效信息展示
    return name;
}

/**
 * 格式化银行卡号
 *
 * @param value
 * @param masked 是否脱敏显示
 * @returns
 */
function formatBankCardNumber(value, masked = true) {
    const { length } = value;
    // 每4位一组，最后一组如果不足 4 位，有多少显示多少
    const parts = [];
    for (let i = 0; i < length; i += 4) {
        parts.push(value.substring(i, Math.min(i + 4, length)));
    }
    if (masked) {
        for (let i = 0, len = parts.length; i < len - 1; i++) {
            parts[i] = '****';
        }
    }
    return parts.join(' ');
}

/**
 * 把时间戳格式化为 10.01 格式
 *
 * @param timestamp
 * @returns
 */
function formatBirthday(timestamp) {
    return dayjs(timestamp).format(DATE_MONTH_DATE_DOT);
}

/**
 * 把数字的整数部分格式化为以千为段拆分，以逗号为分隔符
 *
 * @param value
 * @param decimals
 * @returns
 */
function formatNumberWithComma(value, decimals = 0) {
    const isNegative = value < 0;
    // 先转成正数，避免 - 号影响格式化流程
    if (isNegative) {
        value *= -1;
    }
    const newValue = decimals >= 0
        ? truncateNumber(value, decimals)
        : value.toString();
    let [integerPart, decimalPart] = newValue.split('.');
    // 格式化整数部分
    const list = [];
    const end = integerPart.length - 1;
    for (let i = end; i >= 0; i--) {
        if (i !== end && (end - i) % 3 === 0) {
            list.push(',');
        }
        list.push(integerPart.charAt(i));
    }
    let result = list.reverse().join('');
    // 处理小数部分
    if (decimalPart) {
        if (decimals > 0) {
            decimalPart = decimalPart.padEnd(decimals, '0');
            if (decimalPart.length > decimals) {
                decimalPart = decimalPart.slice(0, decimals);
            }
            result += `.${decimalPart}`;
        }
    }
    else if (decimals > 0) {
        result += `.${''.padEnd(decimals, '0')}`;
    }
    return isNegative ? '-' + result : result;
}

/**
 * 格式化数量
 *
 * @param value
 * @returns
 */
function formatCount(value, unit = '') {
    return formatNumberWithComma(value) + unit;
}
/**
 * 格式化数量（以尽可能短的方式显示数量）
 *
 * @param value
 * @returns
 */
function formatCountShortly(value, unit = '') {
    return shortNumber(value, function (value) {
        return value.toString();
    }) + unit;
}

function formatCategory(category) {
    const list = [];
    if (category.category1) {
        list.push(category.category1.name);
    }
    if (category.category2) {
        list.push(category.category2.name);
    }
    if (category.category3) {
        list.push(category.category3.name);
    }
    return list.join('/');
}

/**
 * 把万分比格式化为折扣
 *
 * @param value
 * @returns
 */
function formatDiscount(value) {
    return discountToDisplay(value) + '折';
}

/**
 * 把距离格式化为千米单位
 *
 * @param distance
 * @returns
 */
function formatDistance(distance) {
    return distanceToDisplay(distance) + '公里';
}

function normalizeDuration(milliseconds) {
    const result = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    if (milliseconds <= 0) {
        return result;
    }
    const seconds = Math.ceil(milliseconds / MS_SECOND);
    const minutes = Math.floor(milliseconds / MS_MINUTE);
    const hours = Math.floor(milliseconds / MS_HOUR);
    const days = Math.floor(milliseconds / MS_DAY);
    if (days > 0) {
        result.days = days;
    }
    if (hours % 24 > 0) {
        result.hours = hours % 24;
    }
    if (minutes % 60 > 0) {
        result.minutes = minutes % 60;
    }
    if (seconds % 60 > 0) {
        result.seconds = seconds % 60;
    }
    return result;
}

function formatDuration(milliseconds) {
    const result = [];
    const data = normalizeDuration(milliseconds);
    if (data.days > 0) {
        result.push(`${data.days}天`);
    }
    if (data.hours > 0) {
        result.push(`${data.hours}小时`);
    }
    if (data.minutes > 0) {
        result.push(`${data.minutes}分钟`);
    }
    if (data.seconds > 0) {
        result.push(`${data.seconds}秒`);
    }
    return result.join('');
}

/**
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
function formatDate(timestamp, format = DATE_YEAR_MONTH_DATE) {
    return dayjs(timestamp).format(format);
}
/**
 * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
 *
 * @param timestamp
 * @returns
 */
function formatDateRange(startTimestamp, endTimestamp) {
    return formatDate(startTimestamp) + ' 至 ' + formatDate(endTimestamp);
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
 * 把时间戳格式化为 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @param format
 * @returns
 */
function formatDateTime(timestamp, format = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE) {
    return dayjs(timestamp).format(format);
}
/**
 * 把时间戳格式化为 2020-10-01 00:00 至 2020-10-02 00:00 形式
 *
 * @param timestamp
 * @returns
 */
function formatDateTimeRange(startTimestamp, endTimestamp) {
    return formatDateTime(startTimestamp) + ' 至 ' + formatDateTime(endTimestamp);
}
/**
 * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @returns
 */
function formatDateTimeShortly(timestamp) {
    const t1 = dayjs(timestamp);
    const t2 = dayjs(Date.now());
    if (t1.year() === t2.year()) {
        return t1.format(DATE_TIME_MONTH_DATE_HOUR_MINUTE);
    }
    return dayjs(timestamp).format(DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE);
}

/**
 * 把时间戳格式化为 周开始 ~ 周结束 格式
 *
 * @param timestamp
 * @returns
 */
function formatWeek(timestamp) {
    const date = new Date(timestamp);
    const offset = -1 * date.getDay();
    const startTimestamp = timestamp + offset * MS_DAY;
    return `${formatDateShortly(startTimestamp)} 至 ${formatDateShortly(startTimestamp + 6 * MS_DAY)}`;
}

/**
 * 把时间戳格式化为 2020-10 格式
 *
 * @param timestamp
 * @returns
 */
function formatMonth(timestamp) {
    return dayjs(timestamp).format(MONTH_DEFAULT);
}

/**
 * 把时间戳格式化为 2020 格式
 *
 * @param timestamp
 * @returns
 */
function formatYear(timestamp) {
    return dayjs(timestamp).format(YEAR_DEFAULT);
}

/**
 * 格式化金额（元），保留 2 位小数
 *
 * @param value
 * @returns
 */
function formatAmount(value, unit = '元') {
    return formatNumberWithComma(moneyToDisplay(value), 2) + unit;
}
/**
 * 格式化金额（厘），保留 3 位小数
 *
 * @param value
 * @returns
 */
function formatPenny(value, unit = '元') {
    return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit;
}
/**
 * 格式化金额（元），以较短的方式返回
 *
 * @param value
 * @returns
 */
function formatAmountShortly(value, unit = '元') {
    return shortNumber(moneyToDisplay(value), function (value) {
        return truncateNumber(value, 2);
    }) + unit;
}

/**
 * 把万分比格式化为百分比
 *
 * @param value
 * @returns
 */
function formatRatePercent(value) {
    return rateToDisplay(value) + '%';
}

function formatShelfLife(value) {
    if (value <= 0) {
        return '';
    }
    let result = '';
    const year = Math.floor(value / SHELF_LIFE_YEAR);
    if (year > 0) {
        result += `${year}年`;
        value -= SHELF_LIFE_YEAR * year;
    }
    const month = Math.floor(value / SHELF_LIFE_MONTH);
    if (month > 0) {
        result += `${month}个月`;
        value -= SHELF_LIFE_MONTH * month;
    }
    const day = Math.floor(value / SHELF_LIFE_DAY);
    if (day > 0) {
        result += `${day}天`;
        value -= SHELF_LIFE_DAY * day;
    }
    if (value > 0) {
        result += `${value}小时`;
    }
    return result;
}

function formatSize(value) {
    if (value >= SIZE_GB) {
        const result = divideNumber(value, SIZE_GB);
        return `${truncateNumber(result, isInteger(result) ? 0 : 2)}GB`;
    }
    else if (value >= SIZE_MB) {
        const result = divideNumber(value, SIZE_MB);
        return `${truncateNumber(result, isInteger(result) ? 0 : 2)}MB`;
    }
    else if (value >= SIZE_KB) {
        const result = divideNumber(value, SIZE_KB);
        return `${truncateNumber(result, isInteger(result) ? 0 : 2)}KB`;
    }
    return `${value}B`;
}

function formatHourMinutes(value) {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
// 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
function formatBusinessTimes(businessTimes) {
    const len = businessTimes.length;
    if (len === 0 || len % 2 !== 0) {
        return '';
    }
    const timeRanges = [];
    for (let i = 0; i < len; i += 2) {
        const start = businessTimes[i];
        const end = businessTimes[i + 1];
        const startTime = start % 1440;
        const endTime = end % 1440;
        // 判断是否是全天
        if (startTime === 0 && endTime === 0 && end > start) {
            timeRanges.push('全天');
            continue;
        }
        let startTimeStr = formatHourMinutes(startTime);
        if (start > 1440) {
            startTimeStr = `次日${startTimeStr}`;
        }
        let endTimeStr = formatHourMinutes(endTime);
        if (end > 1440) {
            endTimeStr = `次日${endTimeStr}`;
        }
        timeRanges.push(`${startTimeStr}-${endTimeStr}`);
    }
    return timeRanges.join('、');
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
 * 是否为邮箱
 *
 * @param value
 * @returns
 */
function isEmail(value) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

/**
 * 是否为价格
 *
 * @param value
 * @returns
 */
function isPrice(value) {
    return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value);
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

/// 解析付款码
function parseAuthCode(value) {
    // 微信支付通常以 10-15 开头、18 位纯数字
    if (/^1[0-5]/.test(value)
        && /^\d{18}$/.test(value)) {
        return AUTH_CODE_WECHAT;
    }
    // 支付宝通常以 25-30 开头、18-25 位纯数字
    if ((/^2[5-9]/.test(value) || /^30/.test(value))
        && /^\d{18,25}$/.test(value)) {
        return AUTH_CODE_ALIPAY;
    }
    return -1;
}

/// 解析电话号码
function parsePhoneNumber(value) {
    // 手机号码
    if (/^1\d{10}$/.test(value)) {
        return PHONE_NUMBER_MOBILE;
    }
    // 固定电话
    if (/^0\d{9,11}$/.test(value)
        || /^0\d{2,3}-\d{7,8}$/.test(value)) {
        return PHONE_NUMBER_LANDLINE;
    }
    // 400 电话
    if (/^400\d{7}$/.test(value)
        || /^400-\d{3}-\d{4}$/.test(value)) {
        return PHONE_NUMBER_400;
    }
    return -1;
}

/**
* 获取某天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfDay(timestamp) {
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfPrevDay(timestamp) {
    return startOfDay(timestamp - MS_DAY);
}
/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfNextDay(timestamp) {
    return startOfDay(timestamp + MS_DAY);
}
/**
* 获取某天的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function endOfDay(timestamp) {
    const date = new Date(timestamp);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
}
/**
* 获取某周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfWeek(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDay();
    const offset = (day < 0 ? 7 : 0) + day;
    date.setDate(date.getDate() - offset);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
* 获取前一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfPrevWeek(timestamp) {
    return startOfWeek(timestamp - MS_WEEK);
}
/**
* 获取后一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfNextWeek(timestamp) {
    return startOfWeek(timestamp + MS_WEEK);
}
/**
* 获取某周的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function endOfWeek(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDay();
    const offset = (day < 0 ? -7 : 0) + 6 - day;
    date.setDate(date.getDate() + offset);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
}
/**
* 获取某月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfMonth(timestamp) {
    const date = new Date(timestamp);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
* 获取前一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfPrevMonth(timestamp) {
    const date = new Date(timestamp);
    date.setDate(0); // 改成上个月最后一天
    date.setDate(1); // 改成 1 号
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
* 获取下一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function startOfNextMonth(timestamp) {
    const date = new Date(timestamp);
    date.setMonth(date.getMonth() + 2, 0); // 改成下个月最后一天
    date.setDate(1); // 改成 1 号
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}
/**
* 获取某月的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
function endOfMonth(timestamp) {
    const date = new Date(timestamp);
    date.setMonth(date.getMonth() + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
}
/**
* 优化时间范围，尽量归一到某个类型下，无法归一时，才用范围
*
* @param startTimestamp 开始毫秒时间戳
* @param endTimestamp 结束毫秒时间戳
* @param optimizer 优化器，优先走 day/week/month 分支
* @returns
*/
function optimizeTimeRange(startTimestamp, endTimestamp, optimizer) {
    const startDay = startOfDay(startTimestamp);
    const endDay = endOfDay(startTimestamp);
    const startWeek = startOfWeek(startTimestamp);
    const endWeek = endOfWeek(startTimestamp);
    const startMonth = startOfMonth(startTimestamp);
    const endMonth = endOfMonth(startTimestamp);
    if (startTimestamp === startDay && endTimestamp === endDay && optimizer.isDay) {
        optimizer.isDay(startTimestamp);
    }
    else if (startTimestamp === startWeek && endTimestamp == endWeek && optimizer.isWeek) {
        optimizer.isWeek(startTimestamp);
    }
    else if (startTimestamp === startMonth && endTimestamp == endMonth && optimizer.isMonth) {
        optimizer.isMonth(startTimestamp);
    }
    else {
        optimizer.isRange(startTimestamp, endTimestamp);
    }
}

export { AUTH_CODE_ALIPAY, AUTH_CODE_WECHAT, DATE_MONTH_DATE, DATE_MONTH_DATE_CHINESE, DATE_MONTH_DATE_DOT, DATE_MONTH_DATE_SLASH, DATE_TIME_MONTH_DATE_HOUR_MINUTE, DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE, DATE_TIME_MONTH_DATE_HOUR_MINUTE_DOT, DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH, DATE_YEAR_MONTH_DATE, DATE_YEAR_MONTH_DATE_CHINESE, DATE_YEAR_MONTH_DATE_DOT, DATE_YEAR_MONTH_DATE_SLASH, MONEY_TEN_THOUSAND_YUAN_TO_CENT, MONEY_YUAN_TO_CENT, MONEY_YUAN_TO_PENNY, MONTH_CHINESE, MONTH_DEFAULT, MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND, MS_WEEK, MS_YEAR, PHONE_NUMBER_400, PHONE_NUMBER_LANDLINE, PHONE_NUMBER_MOBILE, SHELF_LIFE_DAY, SHELF_LIFE_MONTH, SHELF_LIFE_YEAR, SIZE_GB, SIZE_KB, SIZE_MB, YEAR_CHINESE, YEAR_DEFAULT, calculateDistance, calculateRate, discountToBackend, discountToDisplay, distanceToBackend, distanceToDisplay, divideNumber, endOfDay, endOfMonth, endOfWeek, formatAmount, formatAmountShortly, formatArea, formatBankCardNumber, formatBirthday, formatBusinessTimes, formatCategory, formatCity, formatCount, formatCountShortly, formatDate, formatDateRange, formatDateShortly, formatDateTime, formatDateTimeRange, formatDateTimeShortly, formatDiscount, formatDistance, formatDistrict, formatDuration, formatHourMinutes, formatMonth, formatNumberWithComma, formatPenny, formatProvince, formatRatePercent, formatShelfLife, formatSize, formatWeek, formatYear, isCustomBarcode, isEmail, isInteger, isPrice, isStandardBarcode, minusNumber, moneyToBackend, moneyToDisplay, normalizeDuration, normalizeVersion, optimizeTimeRange, parseAuthCode, parsePhoneNumber, plusNumber, rateToBackend, rateToDisplay, shortNumber, startOfDay, startOfMonth, startOfNextDay, startOfNextMonth, startOfNextWeek, startOfPrevDay, startOfPrevMonth, startOfPrevWeek, startOfWeek, timesNumber, truncateNumber, weightGToBackend, weightKGToBackend, weightToG, weightToKG };
//# sourceMappingURL=hive.esm.js.map
