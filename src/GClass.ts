const classes = ['BC1', 'BC2', 'BC3', 'BC4', 'BC5', 'ПBC3', 'ПBC4', 'ПBC5', 'ТBC1/BC2'] as const;
export type gclass = typeof classes[number]

export class GClass {
    static get classes() { return classes }
}