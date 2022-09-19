import React from 'react'
import { useGetRandomArray } from '../../../hooks/useGetRandomArray'
import { IWord } from '../../../model/Word'

interface IFormToTranslateProps {
    randomWords: IWord[]
}

const FormsToTranslate: React.FC<IFormToTranslateProps> = ({ randomWords }) => {
    const [stage, setStage] = React.useState<number>(0)
    const word = randomWords[stage]

    const getTranslatedArray = (): (IWord | undefined)[] => {
        const translatedArray = useGetRandomArray([...randomWords], 4)

        const findTrueRequest = translatedArray.find(elem => {
            if (elem !== undefined) {
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
            {
                word !== undefined ?
                    <div className="test__question">
                        {word.word}
                        {word.v2}
                        {word.v3}
                    </div>

                    : null
            }

            <div className="test__requests">
                {
                    translatedArray.map((elem, index) => {
                        if (elem !== undefined) {
                            return (
                                <span
                                    onClick={() => requestHandler(word, elem)}
                                    className="test__request"
                                    key={index}
                                >
                                    {elem.translated}
                                </span>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default FormsToTranslate