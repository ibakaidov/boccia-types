
export class Cort {
  public id: number;
  public redName = "";
  public blueName = "";
  public redScore = 0;
  public blueScore = 0;
  public end = 1;
  public classGame = "BC1";
  public groupStep = true;
  public group = "A";
  public semi = 8;
  constructor(id: number) {
    this.id = id;
  }
  public static valid(cort: Cort, game = false) {
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