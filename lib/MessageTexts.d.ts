declare type textids = "start" | "end" | 'game' | 'wait' | 'message' | 'error' | 'startMatch';
export declare class MessageTexts {
    private TEXTS;
    prepare(id: textids, params?: {
        [key: string]: any;
    }, options?: {
        [key: string]: boolean;
    }): any;
    static reduceName(name: string, team?: boolean): string;
}
export {};
