import { configureStore } from "@reduxjs/toolkit";
import userPreferenceReducer from './userPreferencesSlice';

const store = configureStore({
    reducer: {
        userPreferences: userPreferenceReducer
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store;