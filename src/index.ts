import { AxiosInstance } from 'axios'

import { getAxiosInstance } from './communications'
import {
  getCards,
  getClanByTag,
  getClanCurrentRiverRace,
  getClanCurrentWar,
  getClanMembers,
  getClanRankingsForLocation,
  getClans,
  getClanWarlog,
  getGlobalTournaments,
  getLeaderboardById,
  getLeaderboards,
  getLocationById,
  getLocations,
  getPlayerBattleLog,
  getPlayerByTag,
  getPlayerRankingsForLocation,
  getPlayerUpcomingChests,
  getTournamentByTag,
  getTournaments,
} from './endpoints'
import {
  CardResponse,
  IBattleLog,
  IChest,
  IClan,
  IClanDetails,
  IClanMember,
  IClanRequestParams,
  ICurrentRiverRace,
  ICurrentWar,
  IGlobalTournaments,
  ILeaderboard,
  ILeaderboardPlayer,
  ILeaderboardRequestParams,
  ILocation,
  ILocationFullRequestParams,
  ILocationRequestParams,
  IPlayer,
  ITournament,
  ITournamentDetails,
  ITournamentRequestParams,
  IWarlog,
} from './interfaces'

/**
 * @namespace ClashRoyaleAPI
 *
 * @class ClashRoyaleAPI
 */
export class ClashRoyaleAPI {
  private readonly apiClient: AxiosInstance

  /**
   * Initializes the axios instance with the token
   * from the developer site https://developer.clashroyale.com
   *
   * @param {string} token - The api token from https://developer.clashroyale.com
   * @param {string} baseUrl - The base url for the api (optional)
   */
  constructor(token: string, baseUrl?: string) {
    this.apiClient = getAxiosInstance(token, baseUrl)
  }

  /**
   * Search all clans by name and/or filtering the results using various criteria.
   *
   * @param {object:IClanRequestParams} params - Object used to filter results.
   */
  public async getClans(params: IClanRequestParams): Promise<IClan[]> {
    return await getClans(params, this.apiClient)
  }

  /**
   * Get information about a single clan by clan tag.
   * Clan tags can be found using clan search operation.
   *
   * @param {string} tag
   */
  public async getClanByTag(tag: string): Promise<IClanDetails> {
    return await getClanByTag(tag, this.apiClient)
  }

  /**
   * List clan members
   *
   * @param {string} tag
   */
  public async getClanMembers(tag: string): Promise<IClanMember[]> {
    return await getClanMembers(tag, this.apiClient)
  }

  /**
   * Retrieve clan's clan war log
   *
   * @param {string} tag
   */
  public async getClanWarlog(tag: string): Promise<IWarlog[]> {
    return await getClanWarlog(tag, this.apiClient)
  }

  /**
   * Retrieve information about clan's current clan war
   *
   * Note:
   * When ICurrentWar.warEndTime is undefined, the war is still in collection.
   * Search for ICurrentWar.collectionEndTime instead
   *
   * @param {string} tag
   */
  public async getClanCurrentWar(tag: string): Promise<ICurrentWar> {
    return await getClanCurrentWar(tag, this.apiClient)
  }
  /**
   * Retrieve information about clan's current river race
   *
   * Note:
   * When ICurrentWar.warEndTime is undefined, the war is still in collection.
   * Search for ICurrentWar.collectionEndTime instead
   *
   * @param {string} tag
   */
  public async getClanCurrentRiverRace(
    tag: string,
  ): Promise<ICurrentRiverRace> {
    return await getClanCurrentRiverRace(tag, this.apiClient)
  }

  /**
   * Get information about a single player by player tag.
   * Player tags can be found either in game or by from clan member lists.
   *
   * @param {string} tag
   */
  public getPlayerByTag = async (tag: string): Promise<IPlayer> => {
    return await getPlayerByTag(tag, this.apiClient)
  }

  /**
   * Get list of reward chests that the player will receive next in the game.
   *
   * @param {string} tag
   */
  public getPlayerUpcomingChests = async (tag: string): Promise<IChest[]> => {
    return await getPlayerUpcomingChests(tag, this.apiClient)
  }

  /**
   * Get list of recent battle results for a player.
   *
   * @param {string} tag
   */
  public getPlayerBattleLog = async (tag: string): Promise<IBattleLog[]> => {
    return await getPlayerBattleLog(tag, this.apiClient)
  }

  /**
   * Search all tournaments by name.
   *
   * @param {object:ITournamentRequestParams} params
   */
  public getTournaments = async (
    params: ITournamentRequestParams,
  ): Promise<ITournament[]> => {
    return await getTournaments(params, this.apiClient)
  }

  /**
   * Get information about a single tournament by a tournament tag.
   *
   * @param {string} tag
   */
  public getTournamentByTag = async (
    tag: string,
  ): Promise<ITournamentDetails> => {
    return await getTournamentByTag(tag, this.apiClient)
  }

  /**
   * List all available global tournaments.
   */
  public getGlobalTournaments = async (): Promise<IGlobalTournaments[]> => {
    return await getGlobalTournaments(this.apiClient)
  }

  /**
   * Get list of all available cards.
   */
  public async getCards(): Promise<CardResponse> {
    return await getCards(this.apiClient)
  }

  /**
   * List all available locations
   *
   * @param {ILocationRequestParams} params
   */
  public async getLocations(
    params: ILocationRequestParams,
  ): Promise<ILocation[]> {
    return await getLocations(params, this.apiClient)
  }

  /**
   * Get information about specific location
   *
   * @param {string} id
   * @param {ILocationFullRequestParams} params
   */
  public async getLocationById(id: string): Promise<ILocation> {
    return await getLocationById(id, this.apiClient)
  }

  /**
   * Get clan rankings for a specific location.
   *
   * @param {string} id
   * @param {ILocationFullRequestParams} params
   */
  public async getClanRankinsForLocation(
    id: string,
    params: ILocationFullRequestParams,
  ): Promise<IClan[]> {
    return await getClanRankingsForLocation(id, params, this.apiClient)
  }

  /**
   * Get player rankings for a specific location
   *
   * @param {string} id
   * @param {ILocationFullRequestParams} params
   */
  public async getPlayerRankingsForLocation(
    id: string,
    params: ILocationFullRequestParams,
  ): Promise<IPlayer[]> {
    return await getPlayerRankingsForLocation(id, params, this.apiClient)
  }

  /**
   * Get clan rankings for a specific location
   *
   * @param {string} id
   * @param {ILocationFullRequestParams} params
   */
  public async getClanWarRankingsForLocation(
    id: string,
    params: ILocationFullRequestParams,
  ): Promise<IClan[]> {
    return await getClanRankingsForLocation(id, params, this.apiClient)
  }

  /**
   * List leaderboards for different trophy roads.
   */
  public async getLeaderboards(): Promise<ILeaderboard[]> {
    return await getLeaderboards(this.apiClient)
  }

  /**
   * Get players on a specific leaderboard.
   *
   * @param {number} leaderboardId
   * @param {ILeaderboardRequestParams} params
   */
  public async getLeaderboardById(
    leaderboardId: number,
    params: ILeaderboardRequestParams = {},
  ): Promise<ILeaderboardPlayer[]> {
    return await getLeaderboardById(leaderboardId, params, this.apiClient)
  }
}
