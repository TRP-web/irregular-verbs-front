import React from 'react'
import { IVerb } from '../../model/Verb'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { vertSlice } from '../../store/reducers/myVerts'
import Verb from './Verb'

const ListVerbs: React.FC = () => {
    const { verbs } = useAppSelector(state => state.vertReducer)


    return (
        <>
            <div className="list-verbs">
                {
                    verbs.map((verb, index) => {
                        return (
                            <Verb verb={verb} index={index + 1} key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ListVerbs