import { gclass } from './GClass';
export interface Match {
    end: any;
    semi: string;
    group: string;
    groupStep: any;
    cortId: number;
    players: [string, string];
    gclass: gclass;
    score: [number[], number[]];
    referee: string;
    refereeTimer: string;
}
