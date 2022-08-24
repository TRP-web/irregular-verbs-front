import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../model/User"

interface IInitialState {
    user: IUser
    load: boolean
    token: string
}
const initialState: IInitialState = {
    user: {
        _id: "null",
        email: "null",
        picture: "null",
        name: "null",
    },
    token: "",
    load: false
}

export const userSlice = createSlice({
    name: "user slise",
    initialState,
    reducers: {
        addToken(state, action: PayloadAction<string>){
            state.token = action.payload
        },
        addUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        chengeLoad(state, action: PayloadAction<boolean>) {
            state.load = action.payload
        },
    }
})

export default userSlice.reducer