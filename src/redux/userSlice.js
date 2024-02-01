import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        email: null,
        role: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.email = null;
            state.role = null;
        },
    },
});

export const { addUser, setToken, setEmail, setRole, logout } = userSlice.actions;

export default userSlice.reducer;