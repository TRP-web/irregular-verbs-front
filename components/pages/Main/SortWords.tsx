import React from 'react'
import ListWords from './ListWords'

const SortWords: React.FC = () => {

    return (
        <div className='verbs__inner'>
            <div className="verbs__filter">
                filtering and sorting
            </div>
            {/* ..... */}
            <ListWords />
        </div>
    )
}
export default SortWords