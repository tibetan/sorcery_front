import { IApiUser } from '../user';
import { IApiProduct } from '../product';

interface IApiReview {
    id: number;
    user_id: number;
    user?: IApiUser | null;
    product_id: number;
    product?: IApiProduct | null;
    rating: number;
    description: string;
    created_at?: string;
    updated_at?: string;
}

export default IApiReview;