import axios from 'axios'
import React from 'react'
import { IWord } from '../../model/Word'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { wordSlice } from '../../store/reducers/myVerts'
import { apiUrls, backUrl } from '../../urls/urls'

const AddWordButton: React.FC = () => {
    const { token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { addRandom, addAllWord } = wordSlice.actions

    const addWordHandler = () => {
        const newWord = {
            translated: `${Math.random()}`,
            v2: `${Math.random()}`,
            v3: `${Math.random()}`,
            verb: `${Math.random()}`
        }
        const url = `${backUrl}${apiUrls.addWord}`
        if (token !== null) {
            axios.post<IWord>(url, { data: newWord },
                {
                    headers: { token: token }
                }
            ).then(res => {
                dispatch(addRandom(res.data))
            })
        } else console.log("token is null");
    }

    React.useEffect(() => {
        const url = `${backUrl}${apiUrls.getWords}`
        if (token !== null) {
            axios.get<IWord[]>(url, { headers: { token: token } })
                .then(res => {
                    const result = res.data
                    dispatch(addAllWord(result))
                })
        } else console.log("token is null");
    }, [token])
    return (
        <>
            <button onClick={addWordHandler}>add Random</button>
        </>
    )
}
export default AddWordButton