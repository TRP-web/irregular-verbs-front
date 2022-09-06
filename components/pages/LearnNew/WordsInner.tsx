import React from 'react'
import { IActiveList } from '../../../model/activeList'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { fetchNewWords } from '../../../store/reducers/newWordsAction'
import Loading from '../../Loading/Loading'
import NewWord from './newWord'

interface IWordsInnerProps {
    active: IActiveList
}

const WordsInner: React.FC<IWordsInnerProps> = ({ active }) => {
    const { loading, newWords } = useAppSelector(state => state.newWordsReducer)
    const token = useAppSelector(state => state.userReducer.token)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        if (token !== null) {
            dispatch(fetchNewWords({ active: active, token: token }))
        } else console.log("token is null");

    }, [active])

    return (
        <div className="learn-new__words">
            {
                loading
                    ?
                    <Loading fontSize={"32px"} />
                    :
                    newWords.map((newWord, index) => {
                        return (
                            <NewWord newWord={newWord} index={index} key={index} />
                        )
                    })
            }
        </div>
    )
}
export default WordsInner