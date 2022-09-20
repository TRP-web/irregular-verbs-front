import { useRouter } from 'next/router'
import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'

interface IFormToTranslateProps {
    randomWords: IWord[]
}

const FormsToTranslate: React.FC<IFormToTranslateProps> = ({ randomWords }) => {
    const [stage, setStage] = React.useState<number>(0)
    const router = useRouter()
    const word = randomWords[stage]

    React.useEffect(() => {
        if (stage > randomWords.length - 1) {
            router.push("/tests")
        }
        if (!word) {
            router.push("/tests")
        }
    }, [stage])

    const getTranslatedArray = (): (IWord | undefined)[] => {
        const translatedArray = useGetRandomArray([...randomWords], 4)

        const findTrueRequest = translatedArray.find(elem => {
            if (elem !== undefined && word !== undefined) {
                return elem.translated === word.translated
            }
        })

        if (findTrueRequest) {
            return translatedArray
        } else {
            console.log("add true reqvest")
            translatedArray.pop()
            translatedArray.push(word)
            return translatedArray
        }
    }

    const requestHandler = (currentWord: IWord, requestWord: IWord) => {
        if (currentWord.translated === requestWord.translated) {
            setStage(stage => stage + 1)
        } else console.log(false)
    }

    const translatedArray = getTranslatedArray()

    return (
        <div className='test__questions-inner'>
            <div className="test__container">
                {
                    word !== undefined ?
                        <div className="test__question">
                            <span className="test__verb">
                                word: <span>{word.word}</span>
                            </span>
                            <span className="test__v2">
                                v2: <span>{word.v2}</span>
                            </span>
                            <span className="test__v3">
                                v3: <span>{word.v3}</span>
                            </span>
                        </div>

                        : null
                }
                <div className="test__requests">
                    {
                        translatedArray.map((elem, index) => {
                            if (elem !== undefined) {
                                return (
                                    <div
                                        onClick={() => requestHandler(word, elem)}
                                        className="test__request"
                                        key={index}
                                    >
                                        {elem.translated}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="test__progres" style={{
                width: `${(stage + 1) / randomWords.length * 100}%`
            }}>
                {stage + 1}/{randomWords.length}
            </div>
        </div>
    )
}
export default FormsToTranslate