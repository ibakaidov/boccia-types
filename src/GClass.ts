const classes = ['BCM1', 'BCM2', 'BCM3', 'BCM4', 'BCM5', 'BCW1', 'BCW2', 'BCW3', 'BCW4', 'BCW5',  'ПBC3', 'ПBC4', 'ПBC5', 'ТBC1/BC2'] as const;
export type gclass = typeof classes[number]

export class GClass {
    static get classes() { return classes }
}