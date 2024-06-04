import { AxiosInstance } from 'axios'
import { CardResponse } from '../interfaces'

/**
 * Get list of all available cards.
 *
 * @param {AxiosInstance} apiClient
 */
const getCards = async (apiClient: AxiosInstance): Promise<CardResponse> => {
  const results = await apiClient.get('/cards')

  return results.data
}

export { getCards }
