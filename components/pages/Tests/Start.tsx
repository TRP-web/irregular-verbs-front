import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/getRandomArray'
import { IWord } from '../../../model/Word'
import { IWordsRadio } from '../../../model/WordsRadio'
import { useAppSelector } from '../../../store/hooks/redux'

const Start: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const router = useRouter()
    const getRandomArray = useGetRandomArray
    const getWordArray = (type: IWordsRadio): IWord[] => {
        if (type === "5") {
            const result = getRandomArray(words, 5)
            return result
        } else if (type === "50p") {
            const result = getRandomArray(words, Math.round(words.length / 2))
            return result
        } else {
            const result = words
            return result
        }
    }

    React.useEffect(() => {
        const type: any = router.query.type
        if (router.query.type === "5" || "50p") {
            console.log(getWordArray(type))
        }
    }, [])

    return (
        <>
            type
        </>
    )
}
export default Start