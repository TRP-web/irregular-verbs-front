import React from 'react'
import Header from '../../Layout/Header'
import WordWrapper from './WordWrapper'

const LearnNew: React.FC = () => {

    return (
        <Header>
            <div className="learn-new">
                <h2>Choose a word to learn</h2>
                <WordWrapper />
            </div>
        </Header>
    )
}
export default LearnNew