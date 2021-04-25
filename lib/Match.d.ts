import { gclass } from './GClass';
export interface Match {
    cortId: number;
    players: [string, string];
    gclass: gclass;
    score: [number[], number[]];
    referee: string;
    refereeTimer: string;
}
