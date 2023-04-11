export interface CardItem {
  id: number
  productCode: string
  productName: string
  description: string
  status: string
  colors: string[]
  price: number
  isActive: number
  image: string | null
  image_overlay: string | null
  createdDate: string | null
  updatedDate: string | null
  createdBy: string | null
  updatedBy: string | null
}
