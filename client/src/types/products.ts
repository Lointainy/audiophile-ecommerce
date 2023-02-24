export interface Iproduct {
  _id: number
  id: number
  slug: string
  name: string
  image: imgType
  category: string
  categoryImage: imgType
  new: boolean
  price: number
  description: number
  features: number
  includes: includeType[]
  gallery: {
    first: imgType
    second: imgType
    third: imgType
  }
  others: otherProduct[]
  quantity: number
}

export type imgType = {
  [index: string]: string
}

export type includeType = {
  quantity: number
  item: string
}

export type otherProduct = {
  slug: string
  name: string
  image: imgType
}
