export interface WorkContentProps {
  position?: string
  place?: string
  placeImg?: Partial<HTMLImageElement>
  date?: string
  cards?: WorkCardProps[]
}

export interface WorkCardProps {
  title?: string
  items?: string[]
  technologies?: string[]
}
