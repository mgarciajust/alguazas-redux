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
    },
});

export const { addUser, setToken, setEmail, setRole } = userSlice.actions;

export default userSlice.reducer;