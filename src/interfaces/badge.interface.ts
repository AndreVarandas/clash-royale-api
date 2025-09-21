export interface IBadgeIconUrls {
  large: string
}

export interface IBadge {
  name: string
  level: number
  maxLevel: number
  progress: number
  target: number
  iconUrls: IBadgeIconUrls
}
