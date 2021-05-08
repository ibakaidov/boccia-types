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
    score: [ScoreHolder, ScoreHolder],
    time: [TimeHolder, TimeHolder],
    tieScore: [boolean, boolean],
    referee: string,
    refereeTimer: string
}

interface ScoreHolder {
    playyerIndex: 0|1
    score: number[]
}
interface TimeHolder {
    playyerIndex: 0|1
    time: number[]
}