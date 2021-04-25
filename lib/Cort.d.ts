export declare class Cort {
    id: number;
    redName: string;
    blueName: string;
    redScore: number;
    blueScore: number;
    end: number;
    classGame: string;
    groupStep: boolean;
    group: string;
    semi: number;
    constructor(id: number);
    static valid(cort: Cort, game?: boolean): boolean;
}
