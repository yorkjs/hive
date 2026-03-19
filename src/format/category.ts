interface ICategory {
  category1?: INode
  category2?: INode
  category3?: INode
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
export function formatCategory(category: ICategory) {

  const list: string[] = []

  if (category.category1) {
    list.push(category.category1.name)
  }
  if (category.category2) {
    list.push(category.category2.name)
  }
  if (category.category3) {
    list.push(category.category3.name)
  }

  return list.join('/')

}
