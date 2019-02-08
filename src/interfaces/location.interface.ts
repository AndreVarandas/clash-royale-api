export interface ILocation {
    id: number
    name: string
    isCountry: boolean
    countryCode: string
}

export interface ILocationRequestParams {
    /**
     * Limit the number of items returned in the response.
     */
    limit: number
    /**
     * Return only items that occur after this marker.
     * After marker can be found from the response,
     * inside the 'paging' property. Note that only
     * after or before can be specified for a request, not both.
     */
    after: number
    /**
     * Return only items that occur before this marker.
     * Before marker can be found from the response,
     * inside the 'paging' property. Note that only
     * after or before can be specified for a request, not both.
     */
    before: number
}

export interface ILocationFullRequestParams extends ILocationRequestParams {
    /**
     * Identifier of the location to retrieve.
     */
    locationId: string
}

export interface IClanWar {
    tag: string
    name: string
    rank: number
    previousRank: number
    location: ILocation
    clanScore: number
    badgeId: number
    members: number
}
