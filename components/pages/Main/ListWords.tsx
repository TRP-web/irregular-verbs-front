import React from 'react'
import Loading from '../../Loading/Loading'
import { IWord } from '../../../model/Word'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { wordSlice } from '../../../store/reducers/myWord'
import Word from './Word'
import { fetchWords } from '../../../store/reducers/wordsAction'

const ListVerbs: React.FC = () => {
    const { words, loading } = useAppSelector(state => state.vertReducer)

    const { token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (token !== null) {
            dispatch(fetchWords(token))
        } else console.log("token is null");
    }, [token])

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
                        : <Loading fontSize='40px' />
                }
            </div>
        </>
    )
}
export default ListVerbs