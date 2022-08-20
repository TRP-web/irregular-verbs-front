import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IVerb } from "../../model/Verb";

interface IInitialState {
    verbs: IVerb[]
}

const initialState: IInitialState = {
    verbs: [
        {
            id: 1, verb: "be", v2: "was/were", v3: "been", translated: "быть"
        },
        {
            id: 2, verb: "go", v2: "went", v3: "gone", translated: "передвигаться, ходить, авыафыа, вадфыаоффыав, одфываофды,"
        }
    ]
}


export const vertSlice = createSlice({
    name: "myverb",
    initialState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            const result = current(state.verbs).filter((verb) => {
                if (verb.id === action.payload) {
                    return false // удалить
                } else return true // оставить
            })
            state.verbs = result
        },
        addRandom(state) {
            state.verbs.push({
                id: Math.random(),
                translated: `${Math.random()}`,
                v2: `${Math.random()}`,
                v3: `${Math.random()}`,
                verb: `${Math.random()}`
            })
        },
    }
})

export default vertSlice.reducer