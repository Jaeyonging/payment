import { configureStore, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodItem, Options } from "../types/type";
import { RootState } from "./configureStore";


interface CartState {
    type: number; //먹고 가기, 포장하기
    foods: FoodItem[];
}

const initialState: CartState = {
    type: 1,
    foods: [],
};

const testInitialState: CartState = {
    type: 1,
    foods: [
        {
            name: "아이스 아메리카노",
            count: 2,
            price: 3000,
            options: [
                {
                    optitle: "얼음 양",
                    opdesc: "많이",
                },
                {
                    optitle: "물량 추가",
                    opdesc: "많이",
                },
                {
                    optitle: "샷 추가",
                    opdesc: "많이",
                },
            ],
        },
        {
            name: "아이스 바닐라",
            count: 2,
            price: 3000,
            options: [
                {
                    optitle: "얼음 양",
                    opdesc: "많이",
                },
                {
                    optitle: "물량 추가",
                    opdesc: "많이",
                },
                {
                    optitle: "샷 추가",
                    opdesc: "많이",
                },
            ],
        },
    ],
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
        removeCart(state, action: PayloadAction<{ name: string; options: Options[] }>) {
            state.foods = state.foods.filter(item =>
                item.name !== action.payload.name ||
                JSON.stringify(item.options) !== JSON.stringify(action.payload.options)
            );
        },
        resetState(state) {
            return initialState;
        }
    }
});

const selectFoods = (state: RootState) => state.item.foods;

export const selectTotalPrice = createSelector(
    [selectFoods],
    (foods) =>
        foods.reduce((total, food) => total + (food.price * food.count), 0)
);


export const { isTakeOut, addCart, removeCart, resetState } = item.actions;
export default item;
