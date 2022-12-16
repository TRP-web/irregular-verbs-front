import axios from 'axios'
import React from 'react'
import { IVisibleWord } from '../../../model/visibleWord'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import { apiUrls, backUrl } from '../../../urls/urls'
import AudioOfWord from '../../AudioOfWord/AudioOfWord'
interface IVerpProp {
    word: IWord
    index: number
    visebleWord: IVisibleWord
}
const Word: React.FC<IVerpProp> = ({ word, index, visebleWord }) => {
    const dispatch = useAppDispatch()
    const token = useAppSelector(state => state.userReducer.token)
    const { removeWord } = wordSlice.actions

    const deleteHanler = (_id: string) => {
        if (token !== null) {
            dispatch(removeWord(_id))
            const url = `${backUrl}${apiUrls.deleteWord}`
            const data = { deleteId: _id }
            axios.delete(url,
                {
                    headers: { token: token },
                    data: data
                }
            ).then(res => console.log(res.data)
            )
        } else console.log("token is null")
    }



    return (
        <div className="verb" >
            <span className='verb__verb'>
                <span className='verb__index'>{index}</span>
                {
                    visebleWord.word === true ?
                        <>
                            {word.word}
                            < AudioOfWord word={word.word} style={{ display: "inline-block" }} />
                        </>
                        : null
                }

            </span>
            <span className='verb__v2'>
                {
                    visebleWord.v2 === true ?
                        <>
                            {word.v2}
                            < AudioOfWord word={word.v2} style={{ display: "inline-block" }} />
                        </>
                        : null
                }
            </span>
            <span className='verb__v3'>
                {
                    visebleWord.v3 === true ?
                        <>
                            {word.v3}
                            < AudioOfWord word={word.v3} style={{ display: "inline-block" }} />
                        </>
                        : null
                }
            </span>
            <span className='verb__translated'>
                {
                    visebleWord.translated === true ?
                        <>
                            {word.translated}
                        </>
                        : null
                }
            </span>
            <img
                src={`${window.location.origin}/img/delete.svg`}
                alt="del"
                className='verb__remove'
                onClick={() => deleteHanler(word._id)}
            />
        </div>
    )
}
export default Word