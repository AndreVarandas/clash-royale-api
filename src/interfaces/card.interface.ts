export interface ICardIconUrls {
  medium: string
  evolutionMedium?: string
}

export interface ICardSupportIconUrls
  extends Omit<ICardIconUrls, 'evolutionMedium'> {}
export interface ICard {
  name: string
  id: number
  level: number
  starLevel: number
  evolutionLevel?: number
  maxLevel: number
  maxEvolutionLevel?: number
  rarity: string
  count: number
  elixirCost: number
  iconUrls: ICardIconUrls
}

export interface ICardSupport
  extends Omit<
    ICard,
    | 'starLevel'
    | 'evolutionLevel'
    | 'maxEvolutionLevel'
    | 'elixirCost'
    | 'iconUrls'
  > {
  iconUrls: ICardSupportIconUrls
}
