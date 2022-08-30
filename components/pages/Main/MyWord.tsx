import React from 'react'
import AddWordButton from './AddWordButton'

import SortWord from './SortWords'

const MyWords: React.FC = () => {

    return (
        <>
            <h2>My Verbs</h2>
            <SortWord />
            <AddWordButton />
        </>
    )
}
export default MyWords