import { Match } from "./Match";

type textids = "start" | "end" | 'game' | 'wait' | 'message' | 'error'|'startMatch';

export class MessageTexts {
  private TEXTS: { [key in textids]: string | Function } = {
    "start": "Добро пожаловать в бота, #name. Я буду отправлять вам результаты матчей. Если вы хотите получать результат по энду, введите поэнду, если хотите получать результат по игре, введите поигре. \nНайти информацию о играх спортсмена можно набрав: поиск фамилия, например, поиск Петров. \nДля поиска по группам введите \"группа [буква группы] [класс]\". Для пар вводить BC3П. Для команд тройка. Например: группа D BC4.",
    "end": ({match, names}:{match:Match, names:[string, string]}, { reduce = true }) => `⏰ Корт ${match.cortId}. ${match.gclass}. ${match.groupStep ? "Группа " + match.group : "1/" + match.semi + " финала"}\n🔴 ${reduce ? MessageTexts.reduceName(names[0]) : names[0]} – ${reduce ? MessageTexts.reduceName(names[1]) : names[1]} 🔵. \n${match.end+1} энд.\n🔴 ${match.score[0].reduce((a,b)=>a+b)} – ${match.score[1].reduce((a,b)=>a+b)} 🔵.`,
    "game": ({match, names}:{match:Match, names:[string, string]}, { reduce = true }) => `🏁 Корт ${match.cortId}. ${match.gclass}. ${match.groupStep ? "Группа " + match.group : "1/" + match.semi + " финала"}\nИгра окончена!\n🔴 ${reduce ? MessageTexts.reduceName(names[0]) : names[0]} – ${reduce ? MessageTexts.reduceName(names[1]) : names[1]} 🔵. \n${match.end+1} энд.\n🔴 ${match.score[0].reduce((a,b)=>a+b)} – ${match.score[1].reduce((a,b)=>a+b)} 🔵.`,
    wait: "Пожалуйста, ожидайте.",
    message: "Сообщение от секретариата:\n #message",
    startMatch:({match, names}:{match:Match, names:[string, string]})=>`⏰ Корт ${match.cortId }. Начался матч между:\n🔴 ${names[0]} - ${names[1] }🔵.`,
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
