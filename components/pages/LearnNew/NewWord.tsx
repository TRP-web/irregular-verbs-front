import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { INewWord } from '../../../model/newWord'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import { newWordsSlice } from '../../../store/reducers/newWords'
import { fetchWords } from '../../../store/reducers/wordsAction'
import { apiUrls, backUrl } from '../../../urls/urls'
import AudioOfWord from '../../AudioOfWord/AudioOfWord'

interface INewWordProps {
    newWord: INewWord
    index: number
}

const NewWord: React.FC<INewWordProps> = ({ newWord, index }) => {
    const [description, setDescription] = React.useState<boolean>(false)
    const { token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { addWord } = wordSlice.actions
    const { removeNewWord } = newWordsSlice.actions

    const addWordHandler = (newWrodArg: INewWord) => {
        console.log(newWrodArg)
        const url = `${backUrl}${apiUrls.addWord}`
        const { _id, translated, v2, v3, word, description, example, statistics } = newWrodArg
        const data: INewWord = { _id, translated, v2, v3, word, description, example, statistics }
        if (token !== null) {
            dispatch(removeNewWord(newWrodArg._id))
            axios.post<IWord>(url, { data: data },
                {
                    headers: { token: token }
                }
            ).then(res => {
                dispatch(addWord(res.data))
            })
        } else console.log("token is null");
    }

    const descHandler = () => {
        setDescription(desc => !desc)
    }

    return (
        <>
            <div className="new-word">
                <span className="new-word__index">{index + 1}</span>
                <span className="new-word__word">
                    {newWord.word}
                    <AudioOfWord word={newWord.word} />
                </span>
                <span className="new-word__v2">
                    {newWord.v2}
                    <AudioOfWord word={newWord.v2} />
                </span>
                <span className="new-word__v3">
                    {newWord.v3}
                    <AudioOfWord word={newWord.v3} />
                </span>
                <span className="new-word__translated">{newWord.translated}</span>
                <div className="new-word__concat">
                    <button
                        onClick={() => addWordHandler(newWord)}
                        className="new-word__learn"
                    >
                        {window.screen.width > 750 ?
                            "Learn new"
                            : "Add"
                        }

                    </button>
                    <Image
                        className={`new-word__img ${description ? "active" : ""}`}
                        onClick={descHandler}
                        src={"/img/down-arrow.svg"}
                        width="35px"
                        height={"20px"} />
                </div>
            </div>
            {
                description
                    ?
                    <div className="new-word__description">
                        {newWord.description}
                    </div>
                    :
                    null
            }

        </>
    )
}
export default NewWord