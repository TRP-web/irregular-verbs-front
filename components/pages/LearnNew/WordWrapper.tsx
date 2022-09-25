import React from 'react'
import { IActiveList } from '../../../model/activeList'
import MenuElem from './MenuElem'
import WordsInner from './WordsInner'

const WordWrapper: React.FC = () => {

    const [activeList, setActiveList] = React.useState<IActiveList>("recommended")

    return (
        <>
            <div className="learn-new__inner">
                <nav className="learn-new__menu">
                    <ul>
                        <MenuElem
                            name='recommended'
                            active={activeList}
                            setActiveList={setActiveList}
                        >Recomended</MenuElem>
                        <MenuElem
                            name='top20'
                            active={activeList}
                            setActiveList={setActiveList}
                        >
                            Top 20
                        </MenuElem>
                    </ul>
                </nav>
                <div className="learn-new__content-inner">
                    <div className="learn-new__filter">
                        <span className="learn-new__index">
                            №
                        </span>
                        <span className="learn-new__type">
                            word
                        </span>
                        <span className="learn-new__type">
                            v2
                        </span>
                        <span className="learn-new__type">
                            v3
                        </span>
                        <span className="learn-new__type">
                            translated
                        </span>
                    </div>
                    <WordsInner active={activeList} />
                </div>
            </div>
        </>
    )
}
export default WordWrapper