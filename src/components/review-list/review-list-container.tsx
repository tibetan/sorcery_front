import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import { fetchReviews } from '../../actions/review-actions';

import withApiService from '../hoc/with-api-service';
import compose from '../../utils/compose';

import { IReviewListProps } from "../../types/review";

import ReviewList from './review-list';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class ReviewListContainer extends Component<IReviewListProps, object> {

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        const { reviews, loading, error, } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <ReviewList reviews = {reviews} />;
    }
}

const mapStateToProps = ({ reviewReducer: { reviews, loading, error }}: RootState) => {
    return { reviews, loading, error };
};

const mapDispatchToProps = (
    dispatch: AppDispatch,
    { apiService }: { apiService: IReviewListProps['apiService'] }
) => ({
    fetchReviews: () =>
        dispatch(fetchReviews({ apiService })),
});

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ReviewListContainer as React.ComponentType<unknown>);
