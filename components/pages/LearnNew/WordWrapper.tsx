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
                <div className="lern-new__content-inner">
                    <div className="learn-new__filter">
                        i am future filter
                    </div>
                    <WordsInner active={activeList} />
                </div>
            </div>
        </>
    )
}
export default WordWrapper