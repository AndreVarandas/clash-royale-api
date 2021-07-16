import { AxiosInstance } from 'axios'
import { IClan, IClanDetails, IClanMember, IClanRequestParams, ICurrentWar, IWarlog } from '../interfaces'
import { ICurrentRiverRace } from '../interfaces/river_race.interface'

/**
 * NOTE From the DOCS:
 * https://developer.clashroyale.com/#/documentation
 *
 * Search all clans by name and/or filtering the results using various criteria.
 * At least one filtering criteria must be defined and if name is used as part
 * of search, it is required to be at least three characters long.
 *
 * It is not possible to specify ordering for results so clients should not
 * rely on any specific ordering as that may change in the future releases of the API.
 *
 * @param {IClanRequestParams} params
 * @param {AxiosInstance} apiClient
 */
const getClans = async (params: IClanRequestParams, apiClient: AxiosInstance): Promise<IClan[]> => {
    const clans = await apiClient.get('/clans', { params })
    return clans.data.items
}

/**
 * Get information about a single clan by clan tag. Clan tags can be found using
 * clan search operation.
 *
 * Note that clan tags start with hash character '#' and that needs to be
 * URL-encoded properly to work in URL, so for example clan tag '#2ABC' would
 * become '%232ABC' in the URL.
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getClanByTag = async (tag: string, apiClient: AxiosInstance): Promise<IClanDetails> => {
    const clan = await apiClient.get(`/clans/${encodeURIComponent(tag)}`)
    return clan.data
}

/**
 * List clan members
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getClanMembers = async (tag: string, apiClient: AxiosInstance): Promise<IClanMember[]> => {
    const members = await apiClient.get(`/clans/${encodeURIComponent(tag)}/members`)
    return members.data.items
}

/**
 * Retrieve clan's clan war log
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getClanWarlog = async (tag: string, apiClient: AxiosInstance): Promise<IWarlog[]> => {
    const warLog = await apiClient.get(`/clans/${encodeURIComponent(tag)}/warlog`)
    return warLog.data.items
}

/**
 * Retrieve information about clan's current clan war
 *
 * Note:
 * When ICurrentWar.warEndTime is undefined, the war is still in collection.
 * Search for ICurrentWar.collectionEndTime instead
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getClanCurrentWar = async (tag: string, apiClient: AxiosInstance): Promise<ICurrentWar> => {
    const currentWar = await apiClient.get(`/clans/${encodeURIComponent(tag)}/currentwar`)
    return currentWar.data
}
/**
 * Retrieve information about clan's current river race
 *
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getClanCurrentRiverRace = async (tag: string, apiClient: AxiosInstance): Promise<ICurrentRiverRace> => {
    const currentRiverRace = await apiClient.get(`/clans/${encodeURIComponent(tag)}/currentriverrace`)
    return currentRiverRace.data
}

export { getClans, getClanByTag, getClanMembers, getClanWarlog, getClanCurrentWar, getClanCurrentRiverRace }
