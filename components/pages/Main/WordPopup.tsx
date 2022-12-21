import Image from 'next/image'
import React from 'react'
import { IWord } from '../../../model/Word'
import AudioOfWord from "../../AudioOfWord/AudioOfWord"
interface IWordPopupProps {
    setStatusPopup: React.Dispatch<React.SetStateAction<boolean>>
    word: IWord
}

const WordPopup: React.FC<IWordPopupProps> = ({ setStatusPopup, word }) => {

    const getPercentage = (count: number, number: number): number => {
        const result = Math.round(number / count * 100)
        return result
    }
    const sTrue = 1//word.statistics[0]
    const sFalse = 1//word.statistics[1]
    const sTrueProcent = getPercentage(sTrue + sFalse, sTrue)
    const sFalseProcent = getPercentage(sTrue + sFalse, sFalse)

    return (
        <div
            className="verb-popup"
            onClick={(e) => setStatusPopup(false)}
        >
            <div
                className="verb-popup__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="verb-popup__header">
                    <div className="verb-popup__logo">
                        <Image
                            src={"/img/info.svg"}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                    </div>
                    <div
                        className="verb-popup__close"
                        onClick={() => setStatusPopup(false)}
                    >
                        <Image
                            src={'/img/delete.svg'}
                            layout={'fill'}
                            objectFit={'contain'}
                        />
                    </div>
                </div>
                <div className="verb-popup__container">
                    <div className="verb-popup__forms">
                        <div className="verb-poup__forms-block">
                            {word.word}
                            <AudioOfWord
                                word={word.word}
                                style={{
                                    marginTop: "10px",
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </div>
                        <div className="verb-poup__forms-block">
                            {word.v2}
                            <AudioOfWord
                                word={word.v2}
                                style={{
                                    marginTop: "10px",
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </div>
                        <div className="verb-poup__forms-block">
                            {word.v3}
                            <AudioOfWord
                                word={word.v3}
                                style={{
                                    marginTop: "10px",
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </div>
                    </div>
                    <div className="verb-popup__translated">
                        {/* <strong>translated:</strong> */}
                        <strong>{word.translated}</strong>
                    </div>
                    <div className="verb-popup__history">
                        <div
                            style={{
                                width: `${sTrueProcent}%`
                            }}
                        >
                            {sTrueProcent}%
                        </div>
                        <div
                            style={{
                                width: `${sFalseProcent}%`
                            }}
                        >
                            {sFalseProcent}%
                        </div>
                    </div>
                    <div className="verb-popup__description">
                        <strong>description:</strong>
                        <span> {word.description}</span>
                    </div>
                    <div className="verb-popup__exampels">
                        <strong>exampels:</strong>
                        {
                            word.example.map((exampel, index) => {
                                return (
                                    <span>
                                        {` ${index + 1}. ${exampel}.`}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WordPopup