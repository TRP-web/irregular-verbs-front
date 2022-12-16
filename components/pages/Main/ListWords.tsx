import React from 'react'
import Loading from '../../Loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import Word from './Word'
import { fetchWords } from '../../../store/reducers/wordsAction'
import { VisualContext } from './SortWords'

const ListVerbs: React.FC = () => {
    const { words, loading } = useAppSelector(state => state.wordsReducer)
    const visebleWord = React.useContext(VisualContext)
    const { token } = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (token !== null) {
            console.log(token, "i am token")
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
                                <Word
                                    word={word}
                                    index={index + 1}
                                    visebleWord={visebleWord}
                                    key={index}
                                />
                            )
                        })
                        : <Loading fontSize='40px' />
                }
            </div>
        </>
    )
}
export default ListVerbs