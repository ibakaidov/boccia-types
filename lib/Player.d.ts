import { GClass } from "./GClass";
export default class Player {
    id: string;
    age: "Ю" | "В";
    birthday: number;
    coach: string;
    fullName: string;
    gclass: GClass;
    gender: boolean;
    org: string;
    rank: string;
    region: string;
    team: boolean | null;
    static validate(player: Player): void;
    static fromData(data: Player): Player;
}
