import { AxiosInstance } from 'axios'

import {
  ILeaderboard,
  ILeaderboardPlayer,
  ILeaderboardRequestParams,
} from '../interfaces'

/**
 * List leaderboards for different trophy roads.
 *
 * @param {AxiosInstance} apiClient
 */
const getLeaderboards = async (
  apiClient: AxiosInstance,
): Promise<ILeaderboard[]> => {
  const leaderboards = await apiClient.get('/leaderboards')
  return leaderboards.data.items
}

/**
 * Get players on a specific leaderboard.
 *
 * @param {number} leaderboardId
 * @param {ILeaderboardRequestParams} params
 * @param {AxiosInstance} apiClient
 */
const getLeaderboardById = async (
  leaderboardId: number,
  params: ILeaderboardRequestParams,
  apiClient: AxiosInstance,
): Promise<ILeaderboardPlayer[]> => {
  const leaderboard = await apiClient.get(`/leaderboard/${leaderboardId}`, {
    params,
  })
  return leaderboard.data.items
}

export { getLeaderboards, getLeaderboardById }
