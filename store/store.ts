import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import vertReducer from "./reducers/myWord"
import userReducer from "./reducers/user"
import newWordsReducer from "./reducers/newWords"
const rootReducer = combineReducers({
    vertReducer,
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