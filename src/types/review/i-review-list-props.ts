import { IReview } from "./";
import { TError } from "../error";

interface IReviewListProps {
    // Redux Props
    reviews: IReview[];
    loading: boolean;
    error: TError;

    // Dispatch Props
    fetchReviews: () => void;

    // Own Props
    apiService: {
        getReviews: () => Promise<IReview[]>;
    };
}

export default IReviewListProps
