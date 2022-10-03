import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'
import Progres from '../../Progres/Progres'
import RequestButton from './RequestButton'

interface IFormToTranslateProps {
    randomWords: IWord[]
}

export interface IResult {
    correctAnswer: number
    mistakes: number
}

const FormsToTranslate: React.FC<IFormToTranslateProps> = ({ randomWords }) => {
    const [stage, setStage] = React.useState<number>(0)
    const [result, setResult] = React.useState<IResult>({
        correctAnswer: 0,
        mistakes: 0
    })
    const router = useRouter()
    const trueWord = randomWords[stage]

    const getTranslatedArray = (): (IWord | undefined)[] => {
        console.log("test")
        const fResult = useGetRandomArray([...randomWords], 4)
        const translatedArray: (IWord | undefined)[] = []
        for (let index = 0; index < fResult.length; index++) {
            const element = fResult[index]
            translatedArray.push(element)
        }
        const findTrueRequest = translatedArray.find(elem => {
            if (elem !== undefined && trueWord !== undefined) {
                return elem.translated === trueWord.translated
            }
        })
        if (findTrueRequest) {
            return translatedArray
        } else {
            const random = Math.round(Math.random() * 3)
            translatedArray[random] = trueWord
            return translatedArray
        }
    }

    const [translatedArray, setTranslatedArray] = React.useState<(IWord | undefined)[]>([...getTranslatedArray()])

    React.useEffect(() => {
        if (stage > randomWords.length - 1) {
            router.push(`/tests/result/${result.correctAnswer}/${result.mistakes}`)
        }

        setTranslatedArray([...getTranslatedArray()])
    }, [stage])

    React.useEffect(() => {
        // if (!trueWord) {
        //     router.push("/tests")
        // }
    }, [])

    return (
        <div className='test__questions-inner'>
            <div className="test__container">
                {
                    trueWord !== undefined ?
                        <div className="test__question">
                            <span className="test__verb">
                                word: <span>{trueWord.word}</span>
                            </span>
                            <span className="test__v2">
                                v2: <span>{trueWord.v2}</span>
                            </span>
                            <span className="test__v3">
                                v3: <span>{trueWord.v3}</span>
                            </span>
                        </div>

                        : null
                }
                <div className="test__requests">
                    {
                        translatedArray.map((elem, index) => {
                            if (elem !== undefined) {
                                return (
                                    <RequestButton
                                        key={index}
                                        word={elem}
                                        trueWord={trueWord}
                                        setStage={setStage}
                                        setResult={setResult}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
          <Progres stage={stage} all={randomWords.length}/>
        </div>
    )
}
export default FormsToTranslate