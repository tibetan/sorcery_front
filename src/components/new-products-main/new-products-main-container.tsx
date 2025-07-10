import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import { fetchProducts } from '../../actions/product-actions';

import withApiService from '../hoc/with-api-service';
import compose from '../../utils/compose';

import { IProductListProps, TApiProductFilters } from "../../types/product";

import NewProductsMain from './new-products-main';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class NewProductsMainContainer extends Component<IProductListProps, object> {

    componentDidMount() {
        this.props.fetchProducts({ status: 'new' });
        // this.props.fetchProducts({ types: 'ceramic', status: ['new', 'popular'] });
    }

    render() {
        const { products, loading, error, } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <NewProductsMain products = {products} />;
    }
}

const mapStateToProps = ({ productReducer: { products, loading, error }}: RootState) => {
    return { products, loading, error };
};

const mapDispatchToProps = (
    dispatch: AppDispatch,
    { apiService }: { apiService: IProductListProps['apiService'] }
) => ({
    fetchProducts: (filters?: TApiProductFilters) =>
        dispatch(fetchProducts({ apiService, filters })),
});

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NewProductsMainContainer as React.ComponentType<unknown>);
