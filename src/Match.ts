// i am cort killer, haha
import { gclass } from './GClass';

export interface Match{
    end: any;
    semi: string;
    group: string;
    groupStep: any;
    cortId: number,
    players: [string, string],
    gclass: gclass,
    score: [number[], number[]],
    time: [number[], number[]],
    tieScore: [boolean, boolean],
    referee: string,
    refereeTimer: string
}