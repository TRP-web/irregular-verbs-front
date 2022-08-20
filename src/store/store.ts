import { combineReducers, configureStore } from '@reduxjs/toolkit'
import vertReducer from "./reducers/myVerts"

const rootReducer = combineReducers({
    vertReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']