import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'
import { IWordsRadio } from '../../../model/WordsRadio'
import { useAppSelector } from '../../../store/hooks/redux'
import FormsToTranslate from './formsToTranslate'

const Start: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const router = useRouter()
    const getRandomArray = useGetRandomArray
    const getWordArray = (type: IWordsRadio = "all"): IWord[] => {
        const wordsArray = [...words]
        if (type === "5") {
            const result: any = getRandomArray(wordsArray, 5)
            return result
        } else if (type === "50p") {
            const result: any = getRandomArray(wordsArray, Math.round(words.length / 2))
            return result
        } else {
            const result: any = getRandomArray(wordsArray, wordsArray.length)
            return result
        }
    }

    const type: any = router.query.type
    return (
        <>
            <FormsToTranslate randomWords={getWordArray(type)} />
        </>
    )
}
export default Start