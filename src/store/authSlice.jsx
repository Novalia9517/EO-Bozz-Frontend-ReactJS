import { createSlice } from "@reduxjs/toolkit";

const initialState = { user : {}}

const authSlice = createSlice({
    name : 'user',
    initialState,
    reducer : {
        login : (state, action) => {
            state.user = action.payload.data
        },
        logout : (state, action) => {
            state.user = {}
        }
    }
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer