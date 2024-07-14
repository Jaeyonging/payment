import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"


interface Users {
    username: string,
    type: string,
    email: string,
    kiosk: number,
    isAuthenticated: boolean;
}

const initialState: Users = {
    username: "JaeyongChoi",
    type: "Master",
    email: "wodyd1318@naver.com",
    kiosk: 3,
    isAuthenticated: false
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        changeType(state, type: PayloadAction<string>) {
            state.type = type.payload
        },
        Login(state) {
            state.isAuthenticated = true
        },
        Logout(state) {
            state.email = ""
            state.kiosk = 0
            state.type = ""
            state.username = ""
            state.isAuthenticated = false
        }
    }
})

export const { setEmail, changeType, Logout, Login } = user.actions;

export default user