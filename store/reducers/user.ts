import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { IUser } from "../../model/User"

interface IInitialState {
    user: IUser
    load: boolean
    token: string | null
}
const initialState: IInitialState = {
    user: {
        _id: null,
        email: null,
        picture: null,
        name: null,
    },
    token: null,
    load: false
}

export const userSlice = createSlice({
    name: "user slise",
    initialState,
    reducers: {
        addToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        addUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        chengeLoad(state, action: PayloadAction<boolean>) {
            state.load = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log(state, action)
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    }


})

export default userSlice.reducer