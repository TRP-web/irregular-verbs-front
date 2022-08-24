import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../model/User"

interface IInitialState {
    user: IUser
    load: boolean
}
const initialState: IInitialState = {
    user: {
        _id: "null",
        email: "null",
        picture: "null",
        name: "null",
    },
    load: false
}

const userSlice = createSlice({
    name: "user slise",
    initialState,
    reducers: {
        add(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        chengeLoad(state, action: PayloadAction<boolean>) {
            state.load = action.payload
        }
    }
})

export default userSlice.reducer