import { Cort } from "./Cort";

type textids = "start" | "end" | 'game' | 'wait' | 'message' | 'error';

export class MessageTexts {
  private TEXTS: { [key in textids]: string | Function } = {
    "start": "Добро пожаловать в бота, #name. Я буду отправлять вам результаты матчей. Если вы хотите получать результат по энду, введите поэнду, если хотите получать результат по игре, введите поигре. \nНайти информацию о играх спортсмена можно набрав: поиск фамилия, например, поиск Петров. \nДля поиска по группам введите \"группа [буква группы] [класс]\". Для пар вводить BC3П. Для команд тройка. Например: группа D BC4.",
    "end": (cort: Cort, { reduce = true }) => `⏰ Корт ${cort.id + 1}. ${cort.classGame}. ${cort.groupStep ? "Группа " + cort.group : "1/" + cort.semi + " финала"}\n🔴 ${reduce ? MessageTexts.reduceName(cort.redName) : cort.redName} – ${reduce ? MessageTexts.reduceName(cort.blueName) : cort.blueName} 🔵. \n${cort.end} энд.\n🔴 ${cort.redScore} – ${cort.blueScore} 🔵.`,
    "game": (cort: Cort, { reduce = true }) => `⛳️ Корт ${cort.id + 1}. ${cort.classGame}. ${cort.groupStep ? "Группа " + cort.group : "1/" + cort.semi + " финала"}\nИгра окончена!\n🔴 ${reduce ? MessageTexts.reduceName(cort.redName) : cort.redName} - ${reduce ? MessageTexts.reduceName(cort.blueName) : cort.blueName} 🔵. \n${cort.end === 5 || cort.end === 7 ? ("На тай-брейке победили " + (cort.redScore > cort.blueScore ? "🔴" : "🔵")) : "🔴" + cort.redScore + " – " + cort.blueScore + "🔵"} .`,
    wait: "Пожалуйста, ожидайте.",
    message: "Сообщение от секретариата:\n #message",
    error: "Ошибка"
  };
  public prepare(id: textids, params: { [key: string]: any } = {}, options: { [key: string]: boolean } = {}) {
    let result = this.TEXTS[id];
    if (typeof result === "function") {
      return result(params, options)
    } else {
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {

          result = result.replace(new RegExp('#' + key, 'g'), params[key])
        }
      }
    }
    return result;
  }

  private static reduceName(name: string): string {
    const [surname, ...other] = name.trim().split(' ');
    return (surname + ' ' + other.map(([symbol]) => symbol || '').join('. ')).trim();
  }
} 