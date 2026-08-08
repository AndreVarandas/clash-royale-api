

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/clash-royale-api/master/art/logo.png" width="400" height="260" alt="Clash Royale Official API Wrapper logo">
</p>

# Wrapper oficial de la API de Clash Royale

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/clash-royale-api.svg)](https://www.npmjs.com/package/@varandas/clash-royale-api)
[![npm](https://img.shields.io/npm/dm/@varandas/clash-royale-api.svg)](https://npmcharts.com/compare/@varandas/clash-royale-api)

[![Build Status](https://travis-ci.org/AndreVarandas/clash-royale-api.svg?branch=master)](https://travis-ci.org/AndreVarandas/clash-royale-api)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/clash-royale-api/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/clash-royale-api/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/AndreVarandas/clash-royale-api/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AndreVarandas/clash-royale-api?targetFile=package.json)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndreVarandas/clash-royale-api/blob/master/LICENSE)

Un wrapper asíncrono para la API oficial de Clash Royale.

Enlace a la API oficial: [https://developer.clashroyale.com](https://developer.clashroyale.com)

## Nota importante

Este wrapper solo funcionará desde una aplicación de servidor en Node.js. Lamentablemente, la API oficial de Clash Royale bloquea las solicitudes realizadas directamente desde el navegador.

## Para comenzar

Para utilizar la API oficial, necesitarás un token. Este token se puede obtener en el sitio web oficial de la API [https://developer.clashroyale.com](https://developer.clashroyale.com). - A cada token se le asigna una dirección IP, así que asegúrate de usar el token en el mismo servidor donde lo obtuviste.

También puedes usar un **servidor proxy** para realizar las solicitudes, como [https://docs.royaleapi.com/proxy.html](https://docs.royaleapi.com/proxy.html) - Más detalles más abajo en la sección de uso.

Una vez que te registres y obtengas el token, estarás listo para comenzar.

## Uso

Instala el paquete:

- `yarn add @varandas/clash-royale-api`

O

- `npm i --save @varandas/clash-royale-api`

Uso:

```javascript
// Importa el paquete
const { ClashRoyaleAPI } = require('@varandas/clash-royale-api')

// Inicializa la API
const api = new ClashRoyaleAPI('the token you got from the api')

// Usa la API para obtener cartas
api
  .getCards()
  .then(cards => {
    // Haz algo con las cartas
  })
  .catch(err => {
    // maneja errores
  })

// Usando el servidor proxy (https://proxy.royaleapi.dev/v1)
// Crea una clave en la API oficial y añade esta IP a la lista blanca (inclúyela): 45.79.218.79
// Usa https://proxy.royaleapi.dev/v1
const api = new ClashRoyaleAPI(
  'the token you got from the api',
  'https://proxy.royaleapi.dev/v1',
)

// Usa la API para obtener cartas
...
```

## Sobre el servidor proxy

El servidor proxy es un servicio proporcionado por el equipo de RoyaleAPI. Te permite realizar solicitudes a la API oficial desde el navegador.

Si deseas alojar tu propio servidor proxy, hay una aplicación web Nuxt que puedes usar disponible en [https://github.com/AndreVarandas/royale-proxy-api](https://github.com/AndreVarandas/royale-proxy-api).

## Métodos

Todas las llamadas a la API son asíncronas y se utilizan de la misma manera que en el ejemplo anterior de `getCards`.

**Clanes**

- `getClans(params: IClanRequestParams)` - Devuelve una lista de todos los clanes disponibles.
- `getClanByTag(tag: string)` - Devuelve detalles sobre un clan específico.
- `getClanMembers(tag: string)` - Devuelve una lista de miembros del clan.
- `getClanWarlog(tag: string)` - Devuelve el registro de guerras de un clan.
- `getClanCurrentWar(tag: string)` - Obtiene información sobre la guerra de clanes actual.
- `getClanCurrentRiverRace(tag: string)` - Obtiene información sobre la carrera fluvial actual del clan.

**Jugadores**

- `getPlayerByTag(tag: string)` - Obtiene información sobre un jugador individual por su etiqueta.
- `getPlayerUpcomingChests(tag: string)` - Obtiene la lista de cofres de recompensas que el jugador recibirá a continuación en el juego.
- `getPlayerBattleLog(tag: string)` - Obtiene la lista de resultados de batallas recientes de un jugador.

**Torneos**

- `getTournaments(params: ITournamentRequestParams)` - Busca todos los torneos por nombre.
- `getTournamentByTag(tag: string)` - Obtiene información sobre un torneo individual por su etiqueta.
- `getGlobalTournaments` - Lista todos los torneos globales disponibles.

**Cartas**

- `getCards` - Obtiene la lista de todas las cartas disponibles.

**Ubicaciones**

- `getLocations(params: ILocationRequestParams)` - Lista todas las ubicaciones disponibles.
- `getLocationById(id: string, params: ILocationFullRequestParams)` - Obtiene información sobre una ubicación específica.
- `getClanRankinsForLocation(id: string, params: ILocationFullRequestParams)` - Obtiene el ranking de clanes para una ubicación específica.
- `getPlayerRankingsForLocation(id: string, params: ILocationFullRequestParams)` - Obtiene el ranking de jugadores para una ubicación específica.
- `getClanWarRankingsForLocation(id: string, params: ILocationFullRequestParams)` - Obtiene el ranking de clanes para una ubicación específica.

**Tablas de clasificación**

- `getLeaderboards()` - Lista las tablas de clasificación para diferentes caminos de trofeos.
- `getLeaderboardById(leaderboardId: number, params: ILeaderboardRequestParams)` - Obtiene los jugadores en una tabla de clasificación específica.

## Objetos de configuración

**IClanRequestParams**

```typescript
/**
 * Nota:
 * Solo se requiere la propiedad name.
 */
export interface IClanRequestParams {
  /**
   * Busca clanes por nombre.
   * Si name se usa como parte de la consulta de búsqueda, debe tener al menos tres
   * caracteres de longitud. El parámetro de búsqueda name se interpreta como una búsqueda
   * comodín, por lo que puede aparecer en cualquier parte del nombre del clan.
   */
  name: string
  /**
   * Filtra por identificador de ubicación del clan. Para obtener la lista de ubicaciones disponibles,
   * consulta la operación getLocations.
   */
  locationId?: number
  /**
   * Filtra por la cantidad mínima de miembros del clan.
   */
  minMembers?: number
  /**
   * Filtra por la cantidad máxima de miembros del clan.
   */
  maxMembers?: number
  /**
   * Filtra por la puntuación mínima del clan.
   */
  minScore?: number
  /**
   * Limita la cantidad de elementos devueltos en la respuesta.
   */
  limit?: number
  /**
   * Devuelve solo los elementos que ocurren después de este marcador.
   * El marcador after se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  after?: number
  /**
   * Devuelve solo los elementos que ocurren antes de este marcador.
   * El marcador before se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  before?: number
}
```

**ITournamentRequestParams**

```typescript
/**
 * Nota:
 * Solo se requiere la propiedad name.
 */
export interface ITournamentRequestParams {
  /**
   * Busca torneos por nombre.
   */
  name: string
  /**
   * Limita la cantidad de elementos devueltos en la respuesta.
   */
  limit?: number
  /**
   * Devuelve solo los elementos que ocurren después de este marcador.
   * El marcador after se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  after?: number
  /**
   * Devuelve solo los elementos que ocurren antes de este marcador.
   * El marcador before se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  before?: number
}
```

**ILocationRequestParams**

```typescript
export interface ILocationRequestParams {
  /**
   * Limita la cantidad de elementos devueltos en la respuesta.
   */
  limit?: number
  /**
   * Devuelve solo los elementos que ocurren después de este marcador.
   * El marcador after se puede encontrar en la respuesta,
   * dentro de la propiedad 'paging'. Ten en cuenta que solo
   * se puede especificar after o before para una solicitud, no ambos.
   */
  after?: number
  /**
   * Devuelve solo los elementos que ocurren antes de este marcador.
   * El marcador before se puede encontrar en la respuesta,
   * dentro de la propiedad 'paging'. Ten en cuenta que solo
   * se puede especificar after o before para una solicitud, no ambos.
   */
  before?: number
}
```

**ILeaderboardRequestParams**

```typescript
export interface ILeaderboardRequestParams {
  /**
   * Limita la cantidad de elementos devueltos en la respuesta.
   */
  limit?: number
  /**
   * Devuelve solo los elementos que ocurren después de este marcador.
   * El marcador after se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  after?: string
  /**
   * Devuelve solo los elementos que ocurren antes de este marcador.
   * El marcador before se puede encontrar en la respuesta, dentro de la propiedad 'paging'.
   * Ten en cuenta que solo se puede especificar after o before para una solicitud, no ambos.
   */
  before?: string
}
```

[LICENCIA - MIT](LICENSE)

---

## Créditos

Logotipo por [Caneco](https://twitter.com/caneco).

---

Este contenido no está afiliado, respaldado, patrocinado ni aprobado específicamente por Supercell, y Supercell no se hace responsable del mismo. Para más información, consulta la [Política de Contenido de Fans de Supercell](http://www.supercell.com/fan-content-policy).
