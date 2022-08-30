import axios from 'axios'
import React from 'react'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import { apiUrls, backUrl } from '../../../urls/urls'
interface IVerpProp {
    word: IWord
    index: number
}
const Word: React.FC<IVerpProp> = ({ word, index }) => {
    const dispatch = useAppDispatch()
    const token = useAppSelector(state => state.userReducer.token)
    const { remove } = wordSlice.actions

    const deleteHanler = (_id: string) => {
        if (token !== null) {
            dispatch(remove(_id))
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
                <span className='verb__inedx'>{index}</span>{word.word}
            </span>
            <span className='verb__v2'>{word.v2}</span>
            <span className='verb__v3'>{word.v3}</span>
            <span className='verb__translated'>{word.translated}</span>
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