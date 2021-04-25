export default class Player {
    id: string;
    age: "Ю" | "В";
    birthday: number;
    coach: string;
    fullName: string;
    gclass: "BC1" | "BC2" | "BC3" | "BC4";
    gender: boolean;
    org: string;
    rank: string;
    region: string;
    team: boolean | null;
    static validate(player: Player): void;
    static fromData(data: Player): Player;
}
