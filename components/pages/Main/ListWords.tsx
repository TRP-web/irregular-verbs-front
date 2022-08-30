import React from 'react'
import Loading from '../../Loading/Loading'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import Word from './Word'

const ListVerbs: React.FC = () => {
    const { words, loading } = useAppSelector(state => state.vertReducer)


    return (
        <>
            <div className="list-verbs">
                {
                    !loading ?
                        words.map((word, index) => {
                            return (
                                <Word word={word} index={index + 1} key={index} />
                            )
                        })
                        : <Loading fontSize='40px'/>
                }
            </div>
        </>
    )
}
export default ListVerbs