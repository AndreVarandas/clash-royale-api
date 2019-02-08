import { AxiosInstance } from 'axios'
import { IBattleLog, IChest, IPlayer } from '../interfaces'

/**
 * Get information about a single player by player tag.
 * Player tags can be found either in game or by from clan member lists.
 *
 * Note that player tags start with hash character
 * '#' and that needs to be URL-encoded properly to work in URL,
 * so for example player tag '#2ABC' would become '%232ABC' in the URL.
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getPlayerByTag = async (tag: string, apiClient: AxiosInstance): Promise<IPlayer> => {
    const player = await apiClient.get(`/players/${encodeURIComponent(tag)}`)
    return player.data
}

/**
 * Get list of reward chests that the player will receive next in the game.
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getPlayerUpcomingChests = async (tag: string, apiClient: AxiosInstance): Promise<IChest[]> => {
    const upcomingChests = await apiClient.get(`/players/${encodeURIComponent(tag)}/upcomingchests`)
    return upcomingChests.data.items
}

/**
 * Get list of recent battle results for a player.
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getPlayerBattleLog = async (tag: string, apiClient: AxiosInstance): Promise<IBattleLog[]> => {
    const playerBattleLog = await apiClient.get(`/players/${encodeURIComponent(tag)}/battlelog`)
    return playerBattleLog.data
}

export { getPlayerByTag, getPlayerUpcomingChests, getPlayerBattleLog }
