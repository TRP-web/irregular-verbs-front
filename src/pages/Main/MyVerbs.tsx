import React from 'react'
import { useAppDispatch } from '../../store/hooks/redux'
import { vertSlice } from '../../store/reducers/myVerts'
import SortVerbs from './SortVerbs'

const MyVerbs: React.FC = () => {
    const dispatch = useAppDispatch()
    const {addRandom} = vertSlice.actions
    return (
        <>
            <h2>My Verbs</h2>
            <SortVerbs />
            <button onClick={() => dispatch(addRandom())}>add Random</button>
        </>
    )
}
export default MyVerbs