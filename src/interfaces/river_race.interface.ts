export interface ICurrentRiverRace {
  state: string
  clan: IRiverRaceClan
  clans: IRiverRaceClan[]
  sectionIndex: number
}

export interface IRiverRaceClan {
  tag: string
  clanScore: number
  badgeId: number
  name: string
  fame: number
  repairPoints: number
  finishTime: string
  participants: IRiverRaceParticipant[]
}
export interface IRiverRaceParticipant {
  fame: number
  name: string
  repairPoints: number
  tag: string
}
