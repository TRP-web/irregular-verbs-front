import React from 'react'
import { IWord } from '../../../model/Word'
import { IFormsWordObj, IResult } from './WordsToForms'

interface IFromsAnswersButtonProps {
    trueWords: IWord
    setFromsWord: React.Dispatch<React.SetStateAction<IFormsWordObj>>
    formsWord: IFormsWordObj
    children: string | undefined
    setResult: React.Dispatch<React.SetStateAction<IResult>>
}

const FromsAnswersButton: React.FC<IFromsAnswersButtonProps> = ({
    children, setFromsWord, trueWords, formsWord, setResult
}) => {
    const [error, setError] = React.useState<boolean>(false)
    const [correct, setCorrect] = React.useState<boolean>(false)
    const sendAnswerHandler = (value: string, formsWord: IFormsWordObj) => {
        if (formsWord.v2 === "") {
            if (value === trueWords.v2) {
                setCorrect(true)
                setFromsWord(current => {
                    const result = { ...current }
                    result.v2 = value
                    return result
                })
                setResult(current => {
                    const result = { ...current }
                    result.correct += 1
                    return result
                })
                const audioObj = new Audio(`https://wooordhunt.ru/data/sound/sow/us/${value}.mp3`)
                audioObj.play()
            } else {
                setResult(current => {
                    const result = { ...current }
                    result.mistakes += 1
                    return result
                })
                setError(true)

                setTimeout(() => {
                    setError(false)
                }, 1500)
            }
        } else if (formsWord.v3 === "") {
            if (value === trueWords.v3) {
                setCorrect(true)
                setFromsWord(current => {
                    const result = { ...current }
                    result.v3 = value
                    return result
                })
                setResult(current => {
                    const result = { ...current }
                    result.correct += 1
                    return result
                })
                const audioObj = new Audio(`https://wooordhunt.ru/data/sound/sow/us/${value}.mp3`)
                audioObj.play()
            } else {
                setResult(current => {
                    const result = { ...current }
                    result.mistakes += 1
                    return result
                })
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 1500)
            }
        }
    }

    React.useEffect(() => {
        setError(false)
        setCorrect(false)
    }, [trueWords])

    return (
        <>
            {
                children !== undefined ?
                    <div
                        className={`test-forms__answer ${error ? "error" : ""}${correct ? "correct" : ""}`}
                        onClick={() => sendAnswerHandler(children, formsWord)}
                    >
                        {children}
                    </div>
                    : null
            }
        </>

    )
}
export default FromsAnswersButton