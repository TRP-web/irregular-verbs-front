import React from 'react'
import { IActiveList } from '../../../model/activeList'

interface IWordsInnerProps {
    active: IActiveList
}

const WordsInner: React.FC<IWordsInnerProps> = () => {

    return (
        <div className="learn-new__words">
            some words blocks
        </div>
    )
}
export default WordsInner