import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginManager/loginSlice';
import navReducer from '../features/navManager/navSlice';

export const store = configureStore({
  reducer: {
    loginManager: loginReducer,
    navManager: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
