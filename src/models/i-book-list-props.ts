import {IBook} from "./i-book";
import {TError} from "../types/t-error";

export interface IBookListProps {
  // Redux Props
  books: IBook[]; // Список книг
  loading: boolean; // Индикатор загрузки
  error: TError; // Ошибка

  // Dispatch Props
  fetchBooks: () => void; // Метод для запроса книг
  onAddedToCart: (id: number) => void; // Метод для добавления книги в корзину

  // Own Props
  bookstoreService: {
    getBooks: () => Promise<IBook[]>; // Сервис для получения книг
  };
}
