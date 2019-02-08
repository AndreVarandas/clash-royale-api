import { AxiosInstance } from 'axios'

import { getAxiosInstance } from './communications'
import {
    getCards,
    getClanByTag,
    getClanCurrentWar,
    getClanMembers,
    getClans,
    getClanWarlog,
    getGlobalTournaments,
    getPlayerBattleLog,
    getPlayerByTag,
    getPlayerUpcomingChests,
    getTournamentByTag,
    getTournaments,
} from './endpoints'
import {
    IBattleLog,
    ICard,
    IChest,
    IClan,
    IClanDetails,
    IClanMember,
    IClanRequestParams,
    ICurrentWar,
    IGlobalTournaments,
    IPlayer,
    ITournament,
    ITournamentDetails,
    ITournamentRequestParams,
    IWarlog,
} from './interfaces'

export class ClashRoyaleAPI {
    private readonly apiClient: AxiosInstance

    /**
     * Initializes the axios instance with the token
     * from the developer site https://developer.clashroyale.com
     *
     * @param {string} token
     */
    constructor(token: string) {
        this.apiClient = getAxiosInstance(token)
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
    public getTournaments = async (params: ITournamentRequestParams): Promise<ITournament[]> => {
        return await getTournaments(params, this.apiClient)
    }

    /**
     * Get information about a single tournament by a tournament tag.
     *
     * @param {string} tag
     */
    public getTournamentByTag = async (tag: string): Promise<ITournamentDetails> => {
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
    public async getCards(): Promise<ICard[]> {
        return await getCards(this.apiClient)
    }
}
