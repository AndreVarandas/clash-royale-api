import { AxiosInstance } from 'axios'
import { IGlobalTournaments, ITournament, ITournamentDetails, ITournamentRequestParams } from '../interfaces'

/**
 * Search all tournaments by name.
 *
 * It is not possible to specify ordering for results so clients
 * should not rely on any specific ordering as that may change in the future releases of the API.
 *
 * @param params
 * @param {AxiosInstance} apiClient
 */
const getTournaments = async (params: ITournamentRequestParams, apiClient: AxiosInstance): Promise<ITournament[]> => {
    const tournaments = await apiClient.get('/tournaments', { params })
    return tournaments.data.items
}

/**
 * Get information about a single tournament by a tournament tag.
 *
 * @param {string} tag
 * @param {AxiosInstance} apiClient
 */
const getTournamentByTag = async (tag: string, apiClient: AxiosInstance): Promise<ITournamentDetails> => {
    const tournament = await apiClient.get(`/tournaments/${encodeURIComponent(tag)}`)
    return tournament.data
}

/**
 * List all available global tournaments.
 *
 * @param {AxiosInstance} apiClient
 */
const getGlobalTournaments = async (apiClient: AxiosInstance): Promise<IGlobalTournaments[]> => {
    const globalTournaments = await apiClient.get('/globaltournaments')
    return globalTournaments.data.items
}

export { getTournaments, getTournamentByTag, getGlobalTournaments }
