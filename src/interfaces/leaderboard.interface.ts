export interface ILeaderboard {
  id: number
  name: string
  iconUrl?: string
}

export interface ILeaderboardPlayer {
  tag: string
  name: string
  expLevel: number
  trophies: number
  rank: number
  previousRank?: number
  clan?: {
    tag: string
    name: string
    badgeId: number
  }
}

export interface ILeaderboardRequestParams {
  /**
   * Limit the number of items returned in the response.
   */
  limit?: number
  /**
   * Return only items that occur after this marker.
   * After marker can be found from the response, inside the 'paging' property.
   * Note that only after or before can be specified for a request, not both.
   */
  after?: string
  /**
   * Return only items that occur before this marker.
   * Before marker can be found from the response, inside the 'paging' property.
   * Note that only after or before can be specified for a request, not both.
   */
  before?: string
}
