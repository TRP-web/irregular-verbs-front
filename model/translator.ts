interface IDetectedLanguage {
    language: string
    score: number
}

export interface ITranslations{
    text: string
    to: string
}

export interface ITranslateData{
    detectedLanguage: IDetectedLanguage[]
    translations: ITranslations[]
}