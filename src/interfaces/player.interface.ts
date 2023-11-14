import { IArena } from './arena.interface'
import { ICard } from './card.interface'

export interface IPlayer {
  tag: string
  name: string
  expLevel: number
  trophies: number
  arena: IArena
  bestTrophies: number
  wins: number
  losses: number
  battleCount: number
  threeCrownWins: number
  challengeCardsWon: number
  challengeMaxWins: number
  tournamentCardsWon: number
  tournamentBattleCount: number
  role: string
  donations: number
  donationsReceived: number
  totalDonations: number
  warDayWins: number
  clanCardsCollected: number
  clan: {
    tag: string
    name: string
    badgeId: number
  }
  leagueStatistics: {
    currentSeason: {
      id: string
      trophies: number
      bestTrophies: number
    }
    previousSeason: {
      id: string
      trophies: number
      bestTrophies: number
    }
    bestSeason: {
      id: string
      trophies: number
      bestTrophies: number
    }
  }
  achievements: [
    {
      name: string
      stars: number
      value: number
      target: number
      info: string
    },
  ]
  cards: ICard[]
  currentFavouriteCard: ICard
}
