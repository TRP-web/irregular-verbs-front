import React from 'react'
import Header from '../../Layout/Header'
import WordWrapper from './WordWrapper'

const LearnNew: React.FC = () => {

    return (
        <div className="learn-new">
            <h2>Choose a word to learn</h2>
            <WordWrapper />
        </div>
    )
}
export default LearnNew