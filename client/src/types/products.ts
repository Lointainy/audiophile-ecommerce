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
  description: string
  features: string
  includes: includeType[]
  gallery: galleryType
  others: otherType[]
  quantity: number
}

export type imgType = {
  [index: string]: string
}

export type includeType = {
  quantity: number
  item: string
}

export type otherType = {
  slug: string
  name: string
  image: imgType
}

export type galleryType = {
  [index: string]: imgType
}
