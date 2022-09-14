import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import wordsReducer from "./reducers/myWord"
import userReducer from "./reducers/user"
import newWordsReducer from "./reducers/newWords"
const rootReducer = combineReducers({
    wordsReducer,
    userReducer,
    newWordsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });