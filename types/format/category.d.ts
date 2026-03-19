interface ICategory {
    category1?: INode;
    category2?: INode;
    category3?: INode;
}
/**
 * 格式化类目
 *
 * @group Function
 * @category Format
 * @param value 类目
 * @returns 格式化后的字符串
 * @example
 * formatCategory({ category1: { name: '手机' }, category2: { name: '手机通讯' }, category3: { name: '手机通讯' } }) // 手机/手机通讯/手机通讯
 */
export declare function formatCategory(category: ICategory): string;
export {};
