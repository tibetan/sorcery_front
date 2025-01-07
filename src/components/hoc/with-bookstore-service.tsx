import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';

const withBookstoreService = <P extends object>() => (
  Wrapped: React.ComponentType<P>
) => {
  return (props: P) => (
    <BookstoreServiceConsumer>
      {(bookstoreService) => (
        <Wrapped {...props} bookstoreService={bookstoreService} />
      )}
    </BookstoreServiceConsumer>
  );
};

export default withBookstoreService;
