export enum IQuantityRadioValue {
    five = "5",
    p50 = "50p",
    all = "all"
}
export enum ITypeRadioValue {
    translate = "translate",
    forms = "forms"
}

export type IQuantityRadio =
    IQuantityRadioValue.five |
    IQuantityRadioValue.p50 |
    IQuantityRadioValue.all


export type ITypeRadio =
    ITypeRadioValue.translate |
    ITypeRadioValue.forms