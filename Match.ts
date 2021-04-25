// i am cort killer, haha
import { gclass } from './GClass';
import Player from './Player'
export interface Match{
    cortId: number,
    players: [Player, Player],
    gclass: gclass,
    score: [number[], number[]],
    referee: string,
    refereeTimer: string
}