import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ChangerState {
    value: boolean
};

const initialState: ChangerState = {
    value: false,
};


export const changerSlice = createSlice({
    name: 'changer',
    initialState,
    reducers: {
        flip(state) {
            state.value = !state.value;
        }
    }
});

export const { flip } = changerSlice.actions;
export const selectChange = (state: RootState) => state.changer.value;
export default changerSlice.reducer;
