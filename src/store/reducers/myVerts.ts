import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "../../model/Word";

interface IInitialState {
    words: IWord[]
}

const initialState: IInitialState = {
    words: []
}

export const wordSlice = createSlice({
    name: "myverb",
    initialState,
    reducers: {
        remove(state, action: PayloadAction<string>) {
            const result = current(state.words).filter((word) => {
                if (word._id === action.payload) {
                    return false // удалить
                } else return true // оставить
            })
            state.words = result
        },
        addRandom(state, action: PayloadAction<IWord>) {
            state.words.push(action.payload)
        },
        addAllWord(state, action: PayloadAction<IWord[]>) {
            state.words = action.payload
        }
    }
})

export default wordSlice.reducer