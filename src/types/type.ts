export interface Options {
    optitle: string;
    opdesc: string;
}

export interface FoodItem {
    name: string;
    count: number;
    price: number;
    options: Options[];
}

export interface CartState {
    type: number; //먹고 가기, 포장하기
    foods: FoodItem[];
}