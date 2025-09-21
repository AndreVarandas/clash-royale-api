export interface IWarParticipants {
  tag: string
  name: string
  cardsEarned: number
  battlesPlayed: number
  wins: number
}

export interface IWarlog {
  seasonId: number
  createdDate: string
  participants: IWarParticipants[]
}

export interface ICurrentWarClan {
  tag: string
  name: string
  badgeId: number
  clanScore: number
  participants: number
  battlesPlayed: number
  wins: number
  crowns: number
}

export interface ICurrentWar {
  state: string
  warEndTime: string
  collectionEndTime: string
  clans: ICurrentWarClan[]
  participants: IWarParticipants[]
}
