export interface ICardIconUrls {
    medium: string
}

export interface ICard {
    id: number
    name: string
    maxLevel: number
    iconUrls: ICardIconUrls
}
