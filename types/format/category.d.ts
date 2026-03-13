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
 */
export declare function formatCategory(category: ICategory): string;
export {};
