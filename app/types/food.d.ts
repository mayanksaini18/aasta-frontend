// /types/food.d.ts

export interface FoodItem {
  name: string;
  restaurant: string;
  discount: string;
  oldPrice: number;
  newPrice: number;
  isVeg: boolean;
  isSoldOut: boolean;
  imagePlaceholder: string;
}

export interface CartItem {
    isCart: true;
    count: number;
    imagePlaceholder: string;
}

export type FoodData = FoodItem | CartItem;