import React from 'react'
import ListWords from './ListWords'

const SortWords: React.FC = () => {

    return (
        <div className='verbs__inner'>
            <div className="verbs__filter">

                <span className="verbs__type">
                    № word
                </span>
                <span className="verbs__type">
                    V2
                </span>
                <span className="verbs__type">
                    V3
                </span>
                <span className="verbs__type">
                    translated
                </span>
                <div className="verbs__typet">
                </div>
            </div>
            {/* ..... */}
            <ListWords />
        </div>
    )
}
export default SortWords