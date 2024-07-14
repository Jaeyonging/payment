import { configureStore } from "@reduxjs/toolkit";
import item from "./itemSlice";
import user from "./userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const store = configureStore({
    reducer: {
        item: item.reducer,
        user: user.reducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;