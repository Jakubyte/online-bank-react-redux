import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface LoginState {
    value: boolean
};

const initialState: LoginState = {
    value: false,
};


export const loginSlice = createSlice({
    name: 'loginManager',
    initialState,
    reducers: {
        login(state) {
            state.value = true;
        },
        logout(state) {
            state.value = false;
        }
    }
});

export const { login, logout } = loginSlice.actions;
export const selectChange = (state: RootState) => state.loginManager.value;
export default loginSlice.reducer;
