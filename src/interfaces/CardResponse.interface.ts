import { ICard, ICardSupport } from './card.interface'

export interface CardResponse {
  items: ICard[]
  supportItems: ICardSupport[]
}
