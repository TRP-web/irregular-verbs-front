import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'
import { IQuantityRadioValue, IQuantityRadio, ITypeRadioValue } from '../../../model/WordsRadio'
import { useAppSelector } from '../../../store/hooks/redux'
import FormsToTranslate from './FormsToTranslate'
import WordsToForms from './WordsToForms'

const Start: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const router = useRouter()
    const getRandomArray = useGetRandomArray
    const getWordArray = (type: IQuantityRadio): IWord[] => {
        const wordsArray = [...words]
        if (type === IQuantityRadioValue.five) {
            const result: any = getRandomArray(wordsArray, 5)
            return result
        } else if (type === IQuantityRadioValue.p50) {
            const result: any = getRandomArray(wordsArray, Math.round(words.length / 2))
            return result
        } else {
            const result: any = getRandomArray(wordsArray, wordsArray.length)
            return result
        }
    }
    console.log(router.query)
    const type: any = router.query.type
    const quantity: any = router.query.quantity
    return (
        <>
            {
                type === ITypeRadioValue.translate ?
                    <FormsToTranslate randomWords={getWordArray(quantity)} />
                    : type === ITypeRadioValue.forms ?
                        <WordsToForms randomWords={getWordArray(quantity)} /> :
                        null
            }

        </>
    )
}
export default Start