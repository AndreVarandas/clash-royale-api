export interface ITournament {
  tag: string
  type: string
  status: string
  creatorTag: string
  name: string
  description: string
  capacity: number
  maxCapacity: number
  preparationDuration: number
  duration: number
  createdTime: string
}

export interface ITournamentRequestParams {
  /**
   * Search tournaments by name.
   */
  name: string
  /**
   * Limit the number of items returned in the response.
   */
  limit?: number
  /**
   * Return only items that occur after this marker.
   * After marker can be found from the response, inside the 'paging' property.
   * Note that only after or before can be specified for a request, not both.
   */
  after?: number
  /**
   * Return only items that occur before this marker.
   * Before marker can be found from the response, inside the 'paging' property.
   * Note that only after or before can be specified for a request, not both.
   */
  before?: number
}

export interface ITournamentDetails {
  items: ITournament[]
  startedTime: string
  membersList: [
    {
      tag: string
      name: string
      score: number
      rank: number
      clan: {
        tag: string
        name: string
        badgeId: number
      }
    },
  ]
}

export interface IGlobalTournaments {
  tag: string
  title: string
  startTime: string
  endTime: string
  maxTopRewardRank: number
  gameMode: {
    id: number
  }
  maxLosses: number
  minExpLevel: number
  tournamentLevel: number
  milestoneRewards: [
    {
      wins: number
      type: string
      chest: string
      amount: number
      resource: string
      rarity: string
    },
  ]
  freeTierRewards: [
    {
      wins: number
      type: string
      chest: string
      amount: number
      resource: string
      rarity: string
    },
  ]
  topRankReward: {
    wins: number
    type: string
    chest: string
    amount: number
    resource: string
    rarity: string
  }
}
