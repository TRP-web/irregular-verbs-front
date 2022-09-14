import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { fetchWords } from '../../../store/reducers/wordsAction'

const Tests: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const { token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (token !== null) {
            dispatch(fetchWords(token))
        } else console.log("token is null");
    }, [token])

    return (
        <>
            <h2>Choose quantity words for testing</h2>
            <div className="test__inputs-inner">
                <div className="test__input-container">
                    <input type="radio" name='quantity' />
                    <span>5 words</span>
                </div>
                <div className="test__input-container">
                    <input type="radio" name='quantity' />
                    <span>1/2 words</span>
                </div>
                <div className="test__input-container">
                    <input type="radio" name='quantity' />
                    <span>all words({words.length})</span>
                </div>
            </div>
        </>
    )
}
export default Tests