import { AxiosInstance } from 'axios'
import { ICard } from '../interfaces'

/**
 * Get list of all available cards.
 *
 * @param {AxiosInstance} apiClient
 */
const getCards = async (apiClient: AxiosInstance): Promise<ICard[]> => {
    const results = await apiClient.get('/cards')
    return results.data.items
}

export { getCards }
