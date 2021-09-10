export interface Competition{
    id: string;
    title: string;
    city: string;
    rank: 0|1|2
    timeStart: string
    timeEnd: string
    countMatches: number
    mainReffery: string
    organizer: string
    competitors: string[]
}