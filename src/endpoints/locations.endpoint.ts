import { AxiosInstance } from 'axios'

import {
  IClan,
  IClanWar,
  ILocation,
  ILocationFullRequestParams,
  ILocationRequestParams,
  IPlayer,
} from '../interfaces'

/**
 * List all available locations.
 *
 * @param {ILocationRequestParams} params
 * @param {AxiosInstance} apiClient
 */
const getLocations = async (
  params: ILocationRequestParams,
  apiClient: AxiosInstance,
): Promise<ILocation[]> => {
  const locations = await apiClient.get('/locations', { params })
  return locations.data.items
}

/**
 * Get information about specific location.
 *
 * @param {string} id
 * @param {AxiosInstance} apiClient
 */
const getLocationById = async (
  id: string,
  apiClient: AxiosInstance,
): Promise<ILocation> => {
  const location = await apiClient.get(`/locations/${id}`)
  return await location.data
}

/**
 * Get clan rankings for a specific location.
 *
 * @param {string} id
 * @param {ILocationFullRequestParams} params
 * @param {AxiosInstance} apiClient
 */
const getClanRankingsForLocation = async (
  id: string,
  params: ILocationFullRequestParams,
  apiClient: AxiosInstance,
): Promise<IClan[]> => {
  const clanRankingsForLocation = await apiClient.get(
    `/locations/${id}/rankings/clans`,
    { params },
  )
  return clanRankingsForLocation.data.items
}

/**
 * Get player rankings for a specific location
 *
 * @param {string} id
 * @param {ILocationFullRequestParams} params
 * @param {AxiosInstance} apiClient
 */
const getPlayerRankingsForLocation = async (
  id: string,
  params: ILocationFullRequestParams,
  apiClient: AxiosInstance,
): Promise<IPlayer[]> => {
  const playerRankingsForLocation = await apiClient.get(
    `/locations/${id}/rankings/players`,
    { params },
  )
  return await playerRankingsForLocation.data.items
}

/**
 * Get clan rankings for a specific location
 *
 * @param {string} id
 * @param { ILocationFullRequestParams } params
 * @param { AxiosInstance } apiClient
 */
const getClanWarRankingsForLocation = async (
  id: string,
  params: ILocationFullRequestParams,
  apiClient: AxiosInstance,
): Promise<IClanWar[]> => {
  const clanWarRankingsForLocation = await apiClient.get(
    `/locations/${id}/rankings/clanwars`,
  )
  return await clanWarRankingsForLocation.data.items
}

export {
  getLocations,
  getLocationById,
  getClanRankingsForLocation,
  getPlayerRankingsForLocation,
  getClanWarRankingsForLocation,
}
