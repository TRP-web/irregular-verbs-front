import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { INewWord } from '../../../model/newWord'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import { fetchWords } from '../../../store/reducers/wordsAction'
import { apiUrls, backUrl } from '../../../urls/urls'

interface INewWordProps {
    newWord: INewWord
    index: number
}

const NewWord: React.FC<INewWordProps> = ({ newWord, index }) => {
    const [description, setDescription] = React.useState<boolean>(false)
    const { token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { add } = wordSlice.actions

    const addWordHandler = (newWrodArg: INewWord) => {

        const url = `${backUrl}${apiUrls.addWord}`
        const { translated, v2, v3, word } = newWrodArg
        const data = { translated, v2, v3, word }
        if (token !== null) {
            axios.post<IWord>(url, { data: data },
                {
                    headers: { token: token }
                }
            ).then(res => {
                console.log(res.data);
                
                dispatch(add(res.data))
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
                <span className="new-word__word">{newWord.word}</span>
                <span className="new-word__v2">{newWord.v2}</span>
                <span className="new-word__v3">{newWord.v3}</span>
                <span className="new-word__translated">{newWord.translated}</span>
                <div className="new-word__concat">
                    <button
                        onClick={() => addWordHandler(newWord)}
                        className="new-word__learn"
                    >Learn new
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