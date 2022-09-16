import Link from 'next/link'
import React from 'react'
import { IWordsRadio } from '../../../model/WordsRadio'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { fetchWords } from '../../../store/reducers/wordsAction'



const Tests: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const { token } = useAppSelector(state => state.userReducer)
    const [activeRadio, setActiveRadio] = React.useState<IWordsRadio>("5")
    const dispatch = useAppDispatch()

    const chengeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: any = e.target.value
        setActiveRadio(value)
        console.log(value)
    }

    React.useEffect(() => {
        if (token !== null) {
            dispatch(fetchWords(token))
        } else console.log("token is null");
    }, [token])

    return (
        <div className='test'>
            <h2>Choose quantity words for testing</h2>
            <div className="test__inputs-inner">
                {
                    words.length >= 5 ?
                        <div className="test__input-container">
                            <input
                                type="radio"
                                name='quantity'
                                value={"5"}
                                checked={activeRadio === "5" ? true : false}
                                onChange={(e) => chengeHandler(e)}
                            />
                            <span>5 words</span>
                        </div>
                        : null
                }

                <div className="test__input-container">
                    <input
                        type="radio"
                        name='quantity'
                        value={"50p"}
                        checked={activeRadio === "50p" ? true : false}
                        onChange={(e) => chengeHandler(e)}
                    />
                    <span>50% words</span>
                </div>
                <div className="test__input-container">
                    <input
                        type="radio"
                        name='quantity'
                        value={"all"}
                        checked={activeRadio === "all" ? true : false}
                        onChange={(e) => chengeHandler(e)}
                    />
                    <span>all words({words.length})</span>
                </div>
            </div>
            <Link href={`tests/${activeRadio}`}>
                <a>Start test words</a>
            </Link>
        </div>
    )
}
export default Tests