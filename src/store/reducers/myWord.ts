import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "../../model/Word";
import { fetchWords } from "./wordsAction";

interface IInitialState {
    words: IWord[]
    loading: boolean
}

const initialState: IInitialState = {
    words: [],
    loading: false
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
    },
    extraReducers: {
        [fetchWords.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
            console.log(action.payload)
            state.words = action.payload
            state.loading = false
        },
        [fetchWords.pending.type]: (state) => {
            state.loading = true
        }
    }
})

export default wordSlice.reducer