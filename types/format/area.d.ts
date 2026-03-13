interface IArea {
    country?: INode;
    province?: INode;
    city?: INode;
    district?: INode;
    address?: string;
}
/**
 * 格式化地区
 *
 * @group Function
 * @category Format
 * @param value 地区
 * @param options 配置项
 * @returns 格式化后的字符串
 */
export declare function formatArea(area: IArea, options?: {
    simplify: boolean;
}): string;
export {};
