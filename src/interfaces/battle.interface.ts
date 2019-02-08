import { IArena, ICard } from './'

export interface IBattleLog {
    type: string
    battleTime: string
    arena: IArena
    gameMode: {
        id: number
        name: string
    }
    deckSelection: string
    team: [
        {
            tag: string
            name: string
            startingTrophies: number
            trophyChange: number
            crowns: number
            clan: {
                tag: string
                name: string
                badgeId: number
            }
            cards: ICard[]
        }
    ]
    opponent: [
        {
            tag: string
            name: string
            startingTrophies: number
            trophyChange: number
            crowns: number
            clan: {
                tag: string
                name: string
                badgeId: number
            }
            cards: ICard[]
        }
    ]
}
