import React from 'react'
import { IWord } from '../../../model/Word'
import { IResult } from './FormsToTranslate'

interface IRequestButtonProps {
    trueWord: IWord
    word: IWord
    setStage: React.Dispatch<React.SetStateAction<number>>
    setResult: React.Dispatch<React.SetStateAction<IResult>>

}
const RequestButton: React.FC<IRequestButtonProps> = ({
    setStage,
    setResult,
    trueWord,
    word,
}) => {


    const [error, setError] = React.useState<boolean>(false)
    const [okey, setOkey] = React.useState<boolean>(false)
    React.useEffect(() => {
        setError(false)
        setOkey(false)
    }, [trueWord])

    const requestHandler = (currentWord: IWord, requestWord: IWord) => {
        if (currentWord.translated === requestWord.translated) {
            setOkey(true)
            setResult(res => {
                const result = {...res}
                result.correctAnswer += 1
                return result
            })
            setTimeout(() => {
                setStage(stage => stage + 1)
            }, 2000)
        } else {
            setError(true)
            setResult(res => {
                const result = {...res}
                result.mistakes += 1
                return result
            })
        }
    }
    return (
        <>
            <div
                onClick={() => requestHandler(trueWord, word)}
                className={
                    `test__request ${error ? "error" : ""} ${okey ? "okey" : ""}`
                }
            >
                {word.translated}
            </div>
        </>
    )
}
export default RequestButton