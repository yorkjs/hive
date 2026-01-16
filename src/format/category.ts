interface INode {
  id: number,
  name: string,
}

interface ICategory {
  category1?: INode
  category2?: INode
  category3?: INode
}

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
