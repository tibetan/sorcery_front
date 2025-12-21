import { RootState } from '@/app/providers/store';

export const selectSelectedProductId = (state: RootState) =>
    state.productFilters.selectedId;
