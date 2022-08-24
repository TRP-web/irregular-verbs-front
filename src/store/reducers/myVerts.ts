import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IVerb } from "../../model/Verb";

interface IInitialState {
    verbs: IVerb[]
}

const initialState: IInitialState = {
    verbs: []
}


export const vertSlice = createSlice({
    name: "myverb",
    initialState,
    reducers: {
        remove(state, action: PayloadAction<string>) {
            const result = current(state.verbs).filter((verb) => {
                if (verb._id === action.payload) {
                    return false // удалить
                } else return true // оставить
            })
            state.verbs = result
        },
        addRandom(state) {
            state.verbs.push({
                _id: String(Math.random()),
                translated: `${Math.random()}`,
                v2: `${Math.random()}`,
                v3: `${Math.random()}`,
                verb: `${Math.random()}`
            })
        },
    }
})

export default vertSlice.reducer