const  classes = ['BC1', 'BC2', 'BC3', 'BC4', 'ПBC3', 'ПBC4', 'ТBC1/BC2'] as const;
export type gclass = typeof classes

export class GClass{
    static get classes (){return classes}
}