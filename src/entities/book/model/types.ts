export interface ApiBook {
    id: number;
    title: string;
    author: string;
    price: number;
    cover_image:string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    coverImage:string;
}

export type CreateBookDto = Omit<ApiBook, 'id'>;