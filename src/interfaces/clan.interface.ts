import { IArena, ILocation } from './'

export interface IClanMember {
  tag: string
  name: string
  expLevel: number
  trophies: number
  arena: IArena
  role: string
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
  clanChestPoints: number
}

/**
 * Defines a Clan object properties
 */
export interface IClan {
  tag: string
  name: string
  badgeId: number
  clanScore: number
  requiredTrophies: number
  donationsPerWeek: number
  clanChestLevel: number
  clanChestMaxLevel: number
  members: number
  location: ILocation
}

export interface IClanDetails extends IClan {
  description: string
  clanChestStatus: string
  clanChestPoints: number
  memberList: IClanMember[]
}

/**
 * IClanRequestParams
 *
 * This is the interface used for the params object to make requests at '/clans'
 */
export interface IClanRequestParams {
  /**
   * Search clans by name.
   * If name is used as part of search query, it needs to be at least three
   * characters long. Name search parameter is interpreted as wild card
   * search, so it may appear anywhere in the clan name.
   */
  name?: string
  /**
   * Filter by clan location identifier. For list of available locations,
   * refer to getLocations operation.
   */
  locationId?: number
  /**
   * Filter by minimum amount of clan members.
   */
  minMembers?: number
  /**
   * Filter by maximum amount of clan members.
   */
  maxMembers?: number
  /**
   * Filter by minimum amount of clan score.
   */
  minScore?: number
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
