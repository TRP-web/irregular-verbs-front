export interface IWord {
    _id: string
    word: string
    v2: string
    v3: string
    translated: string
    description: string,
    example: [string],
    statistics: [number, number]
}