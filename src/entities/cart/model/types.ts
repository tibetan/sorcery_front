export interface CartItemInput {
    id: number;
    title: string;
    price: number;
}

export interface CartItem {
    id: number;
    title: string;
    count: number;
    total: number;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}