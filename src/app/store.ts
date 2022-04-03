import { configureStore } from '@reduxjs/toolkit';
import changerReducer from '../features/change/changerSlice';

export const store = configureStore({
  reducer: {
    changer: changerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
