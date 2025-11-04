import { IApiBook } from '../../../../types/book';

export const books: IApiBook[] = [
    {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        cover_image: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 45,
        cover_image: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
];

// export const getBooks = (): Promise<IBook[]> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // if (Math.random() < 0.25) {
//             //     reject(new Error('Something bad happened'));
//             // } else {
//             resolve(books);
//             // }
//         }, 900);
//     });
// };
