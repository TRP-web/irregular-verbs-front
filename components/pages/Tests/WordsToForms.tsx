import { useAmp } from 'next/amp'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'
import FromsAnswersButton from './FormsAnswersButton'

interface IWordsToFormsProps {
    randomWords: IWord[]
}

export interface IFormsWordObj {
    v2: string
    v3: string
}

export interface IResult {
    correct: number
    mistakes: number
}

const WordsToForms: React.FC<IWordsToFormsProps> = ({ randomWords }) => {
    const router = useRouter()
    const [stage, setStage] = React.useState<number>(0)
    const [formsWord, setFormsWord] = React.useState<IFormsWordObj>({ v2: "", v3: "" })
    const [trueWord, setTrueWord] = React.useState<IWord>(randomWords[stage])
    const [result, setResult] = React.useState<IResult>({ correct: 0, mistakes: 0 })
    const getAnswersArray = (trueWord: IWord): string[] => {
        console.log(trueWord)
        const randomArray = useGetRandomArray([...randomWords], 4)
        const testRandomArrayV2 = randomArray.find(word => {
            if (word !== undefined && stage <= randomWords.length - 1) {
                return word.v2 === trueWord.v2
            } else router.push("/tests/result/2/1")
        })
        if (!testRandomArrayV2) {
            const random = Math.round(Math.random() * 3)
            randomArray[random] = trueWord
        }
        const resultArray: string[] = []
        randomArray.forEach(elem => {
            if (elem !== undefined) {
                resultArray.push(elem.v2)
                resultArray.push(elem.v3)
            }
        })
        return resultArray
    }

    React.useEffect(() => {
        if (stage > randomWords.length - 1) {
            router.push("/tests/result/2/1")
        }
    }, [stage])

    React.useEffect(() => {
        if (formsWord.v2 === trueWord.v2 && formsWord.v3 === trueWord.v3) {
            const nextStage = stage + 1
            if (nextStage > randomWords.length - 1) {
                router.push("/tests/result/2/1")
            } else setStage(nextStage)
        }
    }, [formsWord])
    React.useEffect(() => {
        setFormsWord({ v2: "", v3: "" })
        setTrueWord(randomWords[stage])

    }, [stage])
    React.useEffect(() => {
        setAnswersArray(getAnswersArray(trueWord))
    }, [trueWord])
    const [answersArray, setAnswersArray] = React.useState<string[]>(getAnswersArray(trueWord))

    return (
        <div className='test-forms'>
            <div className="test-forms__question-inner">
                <div className="test-forms__question-task">
                    {
                        formsWord.v2 === "" ?
                            "pleace choose an v2 form" :
                            "pleace choose an v3 form"
                    }
                </div>
                <span className='test-forms__question'>
                    word:<strong>{trueWord.word}</strong>
                </span>
                <span className='test-forms__question'>
                    v2:<strong>{formsWord.v2}</strong>
                </span>
                <span className='test-forms__question'>
                    v3:<strong>{formsWord.v3}</strong>
                </span>
            </div>
            <div className="test-forms__answers-inner">
                {
                    answersArray.map((answer, index) => {
                        return (
                            <FromsAnswersButton
                                key={index}
                                setFromsWord={setFormsWord}
                                trueWords={trueWord}
                                formsWord={formsWord}
                                setResult={setResult}
                            >
                                {answer}
                            </FromsAnswersButton>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WordsToForms