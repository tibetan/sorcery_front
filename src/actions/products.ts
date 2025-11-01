import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { setSelectedCategory, setSelectedId } from '../reducers/product-slice';

export const useProductActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ setSelectedCategory, setSelectedId }, dispatch);
};
