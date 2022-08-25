import React from 'react'
import { IWord } from '../../model/Word'
import { useAppDispatch } from '../../store/hooks/redux'
import { wordSlice } from '../../store/reducers/myVerts'
interface IVerpProp {
    word: IWord
    index: number
}
const Verb: React.FC<IVerpProp> = ({ word, index }) => {
    const dispatch = useAppDispatch()
    const { remove } = wordSlice.actions

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
                onClick={() => dispatch(remove(word._id))}
            />
        </div>
    )
}
export default Verb