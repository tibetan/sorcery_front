import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { dummyService } from './dummyService';
import { DummyArgs } from './types';

export const dummyBaseQuery: BaseQueryFn<
    DummyArgs,
    unknown,
    { status: number; data: unknown }
    > = async ({ url, method = 'GET', body }) => {
    try {
        const data = await dummyService.handle(url, method, body);
        return { data: data.data };
    } catch (error: any) {
        return {
            error: {
                status: error.message === 'Item not found' ? 404 : 500,
                data: error.message,
            },
        };
    }
};
