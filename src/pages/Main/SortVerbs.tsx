import React from 'react'
import ListVerbs from './ListVerbs'

const SortVerbs: React.FC = () => {

    return (
        <div className='verbs__inner'>
            <div className="verbs__filter">
                filtering and sorting
            </div>
            {/* ..... */}
            <ListVerbs />
        </div>
    )
}
export default SortVerbs