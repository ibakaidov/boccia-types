"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cort = void 0;
class Cort {
    constructor(id) {
        this.redName = "";
        this.blueName = "";
        this.redScore = 0;
        this.blueScore = 0;
        this.end = 1;
        this.classGame = "BC1";
        this.groupStep = true;
        this.group = "A";
        this.semi = 8;
        this.id = id;
    }
    static valid(cort, game = false) {
        return true;
        /*
    if (!(typeof cort.id === "number" && cort.id > -1 && cort.id < 17)) return false;
    if (!(typeof cort.redScore === "number" && cort.redScore > -1 && cort.redScore < 37)) return false;
    if (!(typeof cort.blueScore === "number" && cort.blueScore > -1 && cort.blueScore < 37)) return false;
    if (!(typeof cort.end === "number" && cort.end > -1 && cort.end < 8)) return false;
    if (!(typeof cort.redName === "string" && cort.redName.length > 2)) return false;
    if (!(typeof cort.blueName === "string" && cort.blueName.length > 2)) return false;
    return true;
    */
    }
}
exports.Cort = Cort;
//# sourceMappingURL=Cort.js.map