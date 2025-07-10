import React from 'react';
import { ApiServiceConsumer } from '../api-service-context/api-service-context';

const withApiService = <P extends object>() => (
  Wrapped: React.ComponentType<P>
) => {
  return (props: P) => (
    <ApiServiceConsumer>
      {(apiService) => (
        <Wrapped {...props} apiService={apiService} />
      )}
    </ApiServiceConsumer>
  );
};

export default withApiService;
