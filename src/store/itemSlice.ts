import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Options {
    optitle: string;
    opdesc: string;
}

interface FoodItem {
    name: string;
    count: number;
    price: number;
    options: Options[];
}

interface CartState {
    type: number;
    foods: FoodItem[];
}

const initialState: CartState = {
    type: 1,
    foods: [],
};

const testInitialState: CartState = {
    type: 1,
    foods: [],

};

const item = createSlice({
    name: 'item',
    initialState: testInitialState,
    reducers: {
        isTakeOut(state, action: PayloadAction<number>) {
            state.type = action.payload;
        },
        addCart(state, action: PayloadAction<{ name: string; count: number; price: number; options: Options[] }>) {
            const { name, count, price, options } = action.payload;
            const existingItem = state.foods.find(item =>
                item.name === name &&
                JSON.stringify(item.options) === JSON.stringify(options)
            );
            if (existingItem) {
                existingItem.count += count;
                if (existingItem.count <= 0) {
                    state.foods = state.foods.filter(item => item !== existingItem);
                }
            } else {
                if (count > 0) {
                    state.foods.push({ name, count, price, options });
                }
            }
        },
        resetState(state) {
            return initialState;
        }
    }
});

export const { isTakeOut, addCart, resetState } = item.actions;
export default item;
