import { configureStore } from "@reduxjs/toolkit";
import item from "./itemSlice";

const store = configureStore({
    reducer: {
        item: item.reducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;