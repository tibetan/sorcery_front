import { IUser } from '../user';
import { IProduct } from '../product';

interface IReview {
    id: number;
    userId: number;
    user?: IUser | null;
    productId: number;
    product?: IProduct | null;
    rating: number;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export default IReview;
