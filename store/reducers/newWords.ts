import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INewWord } from "../../model/newWord"
import { fetchNewWords } from "./newWordsAction"


interface IInitialState {
    newWords: INewWord[]
    loading: boolean
}

const initialState: IInitialState = {
    loading: false,
    newWords: []
}

const newWordsSlice = createSlice({
    name: "newWords",
    initialState,
    reducers: {
        addWords(state, action: PayloadAction<INewWord[]>) {
            state.newWords = action.payload
        }
    },
    extraReducers: {
        [fetchNewWords.fulfilled.type]: (state, action: PayloadAction<INewWord[]>) => {
            state.newWords = action.payload
            state.loading = false
        },
        [fetchNewWords.pending.type]: (state) => {
            state.loading = true
        }
    }
})

export default newWordsSlice.reducer