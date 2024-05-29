import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodItem {
    name: string;
    quantity: number;
}

const item = createSlice({
    name: 'item',
    initialState:
    {
        type: 1, foods: [{ name: "Americano", quantity: 1 }, { name: "Latte", quantity: 1 }], price: 2
    },
    reducers: {
        isTakeOut(state, action: PayloadAction<number>) {
            const payload = action.payload;
            state.type = payload;
        },

    }
});

export const { isTakeOut } = item.actions;
export default item;
