"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTexts = void 0;
class MessageTexts {
    constructor() {
        this.TEXTS = {
            "start": "Добро пожаловать в бота, #name. Я буду отправлять вам результаты матчей. Если вы хотите получать результат по энду, введите поэнду, если хотите получать результат по игре, введите поигре. \nНайти информацию о играх спортсмена можно набрав: поиск фамилия, например, поиск Петров. \nДля поиска по группам введите \"группа [буква группы] [класс]\". Для пар вводить BC3П. Для команд тройка. Например: группа D BC4.",
            "end": ({ match, names }, { reduce = true }) => `⏰ Корт ${match.cortId}. ${match.gclass}. ${match.groupStep ? "Группа " + match.group : "1/" + match.semi + " финала"}\n🔴 ${reduce ? MessageTexts.reduceName(names[0]) : names[0]} – ${reduce ? MessageTexts.reduceName(names[1]) : names[1]} 🔵. \n${match.end + 1} энд.\n🔴 ${match.score[0].score.reduce((a, b) => a + b)} – ${match.score[1].score.reduce((a, b) => a + b)} 🔵.`,
            "game": ({ match, names }, { reduce = true }) => `🏁 Корт ${match.cortId}. ${match.gclass}. ${match.groupStep ? "Группа " + match.group : "1/" + match.semi + " финала"}\nИгра окончена!\n🔴 ${reduce ? MessageTexts.reduceName(names[0]) : names[0]} – ${reduce ? MessageTexts.reduceName(names[1]) : names[1]} 🔵. \n${match.end + 1} энд.\n🔴 ${match.score[0].score.reduce((a, b) => a + b)} – ${match.score[1].score.reduce((a, b) => a + b)} 🔵.`,
            wait: "Пожалуйста, ожидайте.",
            message: "Сообщение от секретариата:\n #message",
            startMatch: ({ match, names }) => `⏰ Корт ${match.cortId}. Начался матч между:\n🔴 ${names[0]} - ${names[1]}🔵.`,
            error: "Ошибка"
        };
    }
    prepare(id, params = {}, options = {}) {
        let result = this.TEXTS[id];
        if (typeof result === "function") {
            return result(params, options);
        }
        else {
            for (const key in params) {
                if (Object.prototype.hasOwnProperty.call(params, key)) {
                    result = result.replace(new RegExp('#' + key, 'g'), params[key]);
                }
            }
        }
        return result;
    }
    static reduceName(name) {
        const [surname, ...other] = name.trim().split(' ');
        return (surname + ' ' + other.map(([symbol]) => symbol || '').join('. ')).trim();
    }
}
exports.MessageTexts = MessageTexts;
//# sourceMappingURL=MessageTexts.js.map