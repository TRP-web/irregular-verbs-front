import React from 'react'
import { IVerb } from '../../model/Verb'
import { useAppDispatch } from '../../store/hooks/redux'
import { vertSlice } from '../../store/reducers/myVerts'
interface IVerpProp {
    verb: IVerb
    index: number
}
const Verb: React.FC<IVerpProp> = ({ verb, index }) => {
    const dispatch = useAppDispatch()
    const { remove } = vertSlice.actions

    return (
        <div className="verb" >
            <span className='verb__verb'>
                <span className='verb__inedx'>{index}</span>{verb.verb}
            </span>
            <span className='verb__v2'>{verb.v2}</span>
            <span className='verb__v3'>{verb.v3}</span>
            <span className='verb__translated'>{verb.translated}</span>
            <img
                src={`${window.location.origin}/img/delete.svg`}
                alt="del"
                className='verb__remove'
                onClick={() => dispatch(remove(verb._id))}
            />
        </div>
    )
}
export default Verb