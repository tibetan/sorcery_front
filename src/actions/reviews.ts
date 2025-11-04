import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { setSortBy } from '../reducers/review-slice';

export const useReviewActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ setSortBy }, dispatch);
};
