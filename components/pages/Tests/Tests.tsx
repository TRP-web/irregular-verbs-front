import Link from 'next/link'
import React from 'react'
import { IQuantityRadio, IQuantityRadioValue, ITypeRadio, ITypeRadioValue } from '../../../model/WordsRadio'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { fetchWords } from '../../../store/reducers/wordsAction'

const Tests: React.FC = () => {
    const { words } = useAppSelector(state => state.wordsReducer)
    const { token } = useAppSelector(state => state.userReducer)
    const [activeQuantityRadio, setActiveRadio] = React.useState<IQuantityRadio>(IQuantityRadioValue.five)
    const dispatch = useAppDispatch()
    const [activeTypeRadio, setActiveTypeRadio] = React.useState<ITypeRadio>(ITypeRadioValue.translate)

    const changeQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: any = e.target.value
        setActiveRadio(value)
    }

    const changeTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: any = e.target.value
        setActiveTypeRadio(value)
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
                                value={IQuantityRadioValue.five}
                                checked={activeQuantityRadio === IQuantityRadioValue.five ? true : false}
                                onChange={(e) => changeQuantityHandler(e)}
                            />
                            <span>5 words</span>
                        </div>
                        : null
                }

                <div className="test__input-container">
                    <input
                        type="radio"
                        name='quantity'
                        value={IQuantityRadioValue.p50}
                        checked={activeQuantityRadio === IQuantityRadioValue.p50 ? true : false}
                        onChange={(e) => changeQuantityHandler(e)}
                    />
                    <span>50% words</span>
                </div>
                <div className="test__input-container">
                    <input
                        type="radio"
                        name='quantity'
                        value={IQuantityRadioValue.all}
                        checked={activeQuantityRadio === IQuantityRadioValue.all ? true : false}
                        onChange={(e) => changeQuantityHandler(e)}
                    />
                    <span>all words({words.length})</span>
                </div>
            </div>
            <div className="test__inputs-inner">
                <div className="test__input-container">
                    <input
                        type="radio"
                        name='type'
                        value={ITypeRadioValue.translate}
                        checked={activeTypeRadio === ITypeRadioValue.translate ? true : false}
                        onChange={(e) => changeTypeHandler(e)}
                    />
                    <span>testing of translate</span>
                </div>
                <div className="test__input-container">
                    <input
                        type="radio"
                        name='type'
                        value={ITypeRadioValue.forms}
                        checked={activeTypeRadio === ITypeRadioValue.forms ? true : false}
                        onChange={(e) => changeTypeHandler(e)}
                    />
                    <span>testing of form</span>
                </div>
            </div>
            <Link href={`tests/${activeQuantityRadio}?type=${activeTypeRadio}`}>
                <a>Start test words</a>
            </Link>
        </div>
    )
}
export default Tests