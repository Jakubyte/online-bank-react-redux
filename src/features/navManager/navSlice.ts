import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface NavState {
    value: string
};

const initialState: NavState = {
    value: "home"
};


export const navSlice = createSlice({
    name: 'navManager',
    initialState,
    reducers: {
        select(state, action) {
            state.value = action.payload;
        }
    }
});

export const { select } = navSlice.actions;
export const selectChange = (state: RootState) => state.loginManager.value;
export default navSlice.reducer;