import { useAppDispatch } from '@/app/providers/store/hooks';
import { Book } from '@/entities/book/model/types';
import { addItem } from '@/entities/cart/model/slice';

export const useAddBookToCart = () => {
    const dispatch = useAppDispatch();

    return (book: Book) =>
        dispatch(
            addItem({
                id: book.id,
                title: book.title,
                price: book.price,
            })
        );
};
