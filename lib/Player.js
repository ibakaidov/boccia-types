"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this.id = 'new';
        this.age = 'Ю';
        this.birthday = 0;
        this.coach = '';
        this.fullName = '';
        this.gclass = 'BC2';
        this.gender = true;
        this.org = '';
        this.rank = '';
        this.region = '';
        this.rating = 0;
        this.team = false;
    }
    static validate(player) {
        if (player.id == null)
            throw new Error("id is null");
        if (player.age == null || (player.age !== 'Ю' && player.age !== 'В'))
            throw new Error("age is null");
        if (player.birthday == null)
            throw new Error("birthday is null");
        if (player.coach == null || player.coach.length < 3)
            throw new Error("coach is null");
        if (player.fullName == null || player.fullName.length < 3)
            throw new Error("fullName is null");
        if (player.gclass == null)
            throw new Error("gclass is null");
        if (player.gender === null)
            throw new Error("gender is null");
        if (player.org == null || player.org.length < 1)
            throw new Error("org is null");
        if (player.region == null || player.region.length < 3)
            throw new Error("region is null");
    }
    static fromData(data) {
        const player = new Player();
        player.id = data.id;
        player.age = data.age;
        player.birthday = data.birthday;
        player.coach = data.coach;
        player.fullName = data.fullName;
        player.gclass = data.gclass;
        player.gender = data.gender;
        player.org = data.org;
        player.rank = data.rank;
        player.region = data.region;
        player.rank = data.rank;
        player.team = data.team;
        player.rating = data.rating || 0;
        this.validate(player);
        return player;
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map