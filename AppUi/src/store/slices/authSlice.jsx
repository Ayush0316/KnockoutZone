import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../utils/constants/roles";

const initialState = {
    isAuthenticated: false,
    role: ROLES.GUEST,
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.isLoading = false;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = ROLES.GUEST;
            state.isLoading = false;
            state.error = action.payload || "Login failed";
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = ROLES.GUEST;
            state.isLoading = false;
            state.error = null;
        },
    },
});

// Async login action (mocked)
export const login = (credentials) => async (dispatch) => {
    try {
        dispatch(loginStart());

        // Simulating API delay here for testing
        await new Promise((resolve) => setTimeout(resolve, 15000));

        // You can add email/password validation here if needed
        dispatch(
            loginSuccess({
                user: {
                    name: credentials.user.name,
                    email: credentials.user.email,
                },
                role: credentials.role || ROLES.USER,
            })
        );
    } catch (error) {
        dispatch(loginFailure("Something went wrong during login."));
    }
};

export const { loginStart, loginSuccess, loginFailure, logout } =
    authSlice.actions;

export default authSlice.reducer;
