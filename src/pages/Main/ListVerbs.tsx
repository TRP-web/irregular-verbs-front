import React from 'react'
import { IWord } from '../../model/Word'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { wordSlice } from '../../store/reducers/myVerts'
import Verb from './Word'

const ListVerbs: React.FC = () => {
    const { words } = useAppSelector(state => state.vertReducer)


    return (
        <>
            <div className="list-verbs">
                {
                    words.map((word, index) => {
                        return (
                            <Verb word={word} index={index + 1} key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ListVerbs