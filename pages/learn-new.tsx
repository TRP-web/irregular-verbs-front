import React from 'react'
import { useAppSelector } from '../store/hooks/redux'

const LearnNew: React.FC = () => {
    const testState = useAppSelector(state => state.userReducer.token)
    console.log(testState);
    
    return (
        <>
            test learn new page
        </>
    )
}
export default LearnNew