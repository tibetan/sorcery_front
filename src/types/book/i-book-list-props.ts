import { IBook } from "./";
import { TError } from "../error";

interface IBookListProps {
  // Redux Props
  books: IBook[]; // Список книг
  loading: boolean; // Индикатор загрузки
  error: TError; // Ошибка

  // Dispatch Props
  fetchBooks: () => void; // Метод для запроса книг
  onAddedToCart: (id: number) => void; // Метод для добавления книги в корзину

  // Own Props
  apiService: {
    getBooks: () => Promise<IBook[]>; // Сервис для получения книг
  };
}

export default IBookListProps;
