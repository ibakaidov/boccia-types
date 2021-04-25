declare type textids = "start" | "end" | 'game' | 'wait' | 'message' | 'error';
export declare class MessageTexts {
    private TEXTS;
    prepare(id: textids, params?: {
        [key: string]: any;
    }, options?: {
        [key: string]: boolean;
    }): any;
    private static reduceName;
}
export {};
