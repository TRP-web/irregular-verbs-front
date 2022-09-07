import { createSlice, current, PayloadAction } from "@reduxjs/toolkit"
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

export const newWordsSlice = createSlice({
    name: "newWords",
    initialState,
    reducers: {
        addNewWords(state, action: PayloadAction<INewWord[]>) {
            state.newWords = action.payload
        },
        removeNewWord(state, action: PayloadAction<string>) {
            const removeId = action.payload
            console.log(current(state.newWords));
            
            const result = current(state.newWords).filter((newWord) => {
                if (newWord._id === removeId) {
                    console.log(false, newWord._id, removeId);

                    return false // remove
                } else return true // add
            })
            console.log(result);

            state.newWords = result
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