import axios, { AxiosRequestConfig } from 'axios'

import { BASE_ENDPOINT } from '../constants'

/**
 * Create a default request configuration
 * object for axios.
 */
const defaultRequestConfig: AxiosRequestConfig = {
  baseURL: BASE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
}

/**
 * Creates an axios instance with the required
 * Authorization headers to use the official api.
 *
 * @param {string} token - The api token from https://developer.clashroyale.com
 */
const getAxiosInstance = (token: string) => {
  const authorization = `Bearer ${token}`
  defaultRequestConfig.headers = {
    ...defaultRequestConfig.headers,
    authorization,
  }

  return axios.create(defaultRequestConfig)
}

export { getAxiosInstance }
