import React, {Component} from 'react';
import { connect } from 'react-redux';

import { RootState, AppDispatch } from '../../store';
import { fetchBooks } from '../../actions/book-actions';
import { addBookToCart } from '../../actions/cart-actions';

import BookList from './book-list';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import withApiService from '../hoc/with-api-service';

import compose from '../../utils/compose';

import { IBookListProps } from '../../types/book';

class BookListContainer extends Component<IBookListProps, object> {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookReducer: { books, loading, error }}: RootState) => {
  return { books, loading, error };
};

const mapDispatchToProps = (
  dispatch: AppDispatch,
  { apiService }: { apiService: IBookListProps['apiService'] }
) => ({
  fetchBooks: fetchBooks(apiService, dispatch),
  onAddedToCart: (id: number) => dispatch(addBookToCart(id)),
});

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer as React.ComponentType<unknown>);
