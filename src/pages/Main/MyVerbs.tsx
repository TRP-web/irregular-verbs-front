import React from 'react'
import AddWordButton from './AddWordButton'

import SortVerbs from './SortVerbs'

const MyVerbs: React.FC = () => {

    return (
        <>
            <h2>My Verbs</h2>
            <SortVerbs />
            <AddWordButton />
        </>
    )
}
export default MyVerbs