<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/clash-royale-api/master/art/logo.png" width="400" height="260" alt="Clash Royale Official API Wrapper logo">
</p>

# Clash Royale Official API Wrapper

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/clash-royale-api.svg)](https://www.npmjs.com/package/@varandas/clash-royale-api)
[![npm](https://img.shields.io/npm/dm/@varandas/clash-royale-api.svg)](https://npmcharts.com/compare/@varandas/clash-royale-api)

[![Build Status](https://travis-ci.org/AndreVarandas/clash-royale-api.svg?branch=master)](https://travis-ci.org/AndreVarandas/clash-royale-api)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/clash-royale-api/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/clash-royale-api/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/AndreVarandas/clash-royale-api/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AndreVarandas/clash-royale-api?targetFile=package.json)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndreVarandas/clash-royale-api/blob/master/LICENSE)

An asynchronous wrapper for the official Clash Royale API.

Official API Link [https://developer.clashroyale.com](https://developer.clashroyale.com)

## Important note

This wrapper will only work from a nodejs server app. The official clash royale api is, unfortunately, blocking requests done directly from the browser.

## Getting started

In order to use the official api, you will need a token. This token can be obtained at the Official API website [https://developer.clashroyale.com](https://developer.clashroyale.com).

Once you register and get the token, you are ready to start.

## Usage

Install the package:

-   `yarn add @varandas/clash-royale-api`

OR

-   `npm i --save @varandas/clash-royale-api`

Usage:

```javascript
// Import the package
const { ClashRoyaleAPI } = require('@varandas/clash-royale-api')

// Initialize the api
const api = new ClashRoyaleAPI('the token you got from the api')

// Use the api to get cards
api.getCards()
    .then((cards) => {
        // Do something with the cards
    })
    .catch((err) => {
        // handle errors
    })
```

## Methods

All api calls are asynchronous and used in the same way as above in the getCards example.

**Clans**

-   `getClans(params: IClanRequestParams)` - Returns a list of all the available clans.
-   `getClanByTag(tag: string)` - Returns details about a specific clan.
-   `getClanMembers(tag: string)` - Returns a list of clan members.
-   `getClanWarlog(tag: string)` - Returns the war log for a clan
-   `getClanCurrentWar(tag: string)` - Retrieve information about clan's current clan war
-   `getClanCurrentRiverRace(tag: string)` - Retrieve information about clan's current river race

**Players**

-   `getPlayerByTag(tag: string)` - Get information about a single player by player tag.
-   `getPlayerUpcomingChests(tag: string)` - Get list of reward chests that the player will receive next in the game.
-   `getPlayerBattleLog(tag: string)` - Get list of recent battle results for a player.

**Tournaments**

-   `getTournaments(params: ITournamentRequestParams)` - Search all tournaments by name.
-   `getTournamentByTag(tag: string)` - Get information about a single tournament by a tournament tag.
-   `getGlobalTournaments` - List all available global tournaments.

**Cards**

-   `getCards` - Get list of all available cards.

**Locations**

-   `getLocations(params: ILocationRequestParams)` - List all available locations.
-   `getLocationById(id: string, params: ILocationFullRequestParams)` - Get information about specific location.
-   `getClanRankinsForLocation(id: string, params: ILocationFullRequestParams)` - Get clan rankings for a specific location.
-   `getPlayerRankingsForLocation(id: string, params: ILocationFullRequestParams)` - Get player rankings for a specific location.
-   `getClanWarRankingsForLocation(id: string, params: ILocationFullRequestParams)` - Get clan rankings for a specific location.

## Configuration Objects

**IClanRequestParams**

```typescript
/**
 * Note:
 * Only the name property is required.
 */
export interface IClanRequestParams {
    /**
     * Search clans by name.
     * If name is used as part of search query, it needs to be at least three
     * characters long. Name search parameter is interpreted as wild card
     * search, so it may appear anywhere in the clan name.
     */
    name: string
    /**
     * Filter by clan location identifier. For list of available locations,
     * refer to getLocations operation.
     */
    locationId?: number
    /**
     * Filter by minimum amount of clan members.
     */
    minMembers?: number
    /**
     * Filter by maximum amount of clan members.
     */
    maxMembers?: number
    /**
     * Filter by minimum amount of clan score.
     */
    minScore?: number
    /**
     * Limit the number of items returned in the response.
     */
    limit?: number
    /**
     * Return only items that occur after this marker.
     * After marker can be found from the response, inside the 'paging' property.
     * Note that only after or before can be specified for a request, not both.
     */
    after?: number
    /**
     * Return only items that occur before this marker.
     * Before marker can be found from the response, inside the 'paging' property.
     * Note that only after or before can be specified for a request, not both.
     */
    before?: number
}
```

**ITournamentRequestParams**

```typescript
/**
 * Note:
 * Only the name property is required.
 */
export interface ITournamentRequestParams {
    /**
     * Search tournaments by name.
     */
    name: string
    /**
     * Limit the number of items returned in the response.
     */
    limit?: number
    /**
     * Return only items that occur after this marker.
     * After marker can be found from the response, inside the 'paging' property.
     * Note that only after or before can be specified for a request, not both.
     */
    after?: number
    /**
     * Return only items that occur before this marker.
     * Before marker can be found from the response, inside the 'paging' property.
     * Note that only after or before can be specified for a request, not both.
     */
    before?: number
}
```

**ILocationRequestParams**

```typescript
export interface ILocationRequestParams {
    /**
     * Limit the number of items returned in the response.
     */
    limit?: number
    /**
     * Return only items that occur after this marker.
     * After marker can be found from the response,
     * inside the 'paging' property. Note that only
     * after or before can be specified for a request, not both.
     */
    after?: number
    /**
     * Return only items that occur before this marker.
     * Before marker can be found from the response,
     * inside the 'paging' property. Note that only
     * after or before can be specified for a request, not both.
     */
    before?: number
}
```

[LICENSE - MIT](LICENSE)

---

## Credits

Logo by [Caneco](https://twitter.com/caneco).

---

This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).
