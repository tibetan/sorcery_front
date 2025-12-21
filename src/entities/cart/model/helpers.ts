import { CartItem, CartItemInput } from "@/entities/cart/model/types";

export const calculateTotalPrice = (items: CartItem[]) =>
    items.reduce((sum, item) => sum + item.total, 0);

export const updateItem = (
    input: CartItemInput,
    item: CartItem | undefined,
    delta: number
): CartItem => {
    const {
        id = input.id,
        title = input.title,
        count = 0,
        total = 0,
    } = item || {};

    return {
        id,
        title,
        count: count + delta,
        total: total + delta * input.price,
    };
};

export const updateItems = (
    items: CartItem[],
    updatedItem: CartItem,
    index: number
) => {
    if (updatedItem.count <= 0) {
        return items.filter((_, i) => i !== index);
    }

    if (index === -1) {
        return [...items, updatedItem];
    }

    return [
        ...items.slice(0, index),
        updatedItem,
        ...items.slice(index + 1),
    ];
};
