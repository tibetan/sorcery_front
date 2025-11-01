import RealApiService from './real-api';
import DummyApiService from './dummy-api';

const useDummy = process.env.REACT_APP_USE_DUMMY_API === 'true';

export const ApiService = useDummy ? DummyApiService : RealApiService;
