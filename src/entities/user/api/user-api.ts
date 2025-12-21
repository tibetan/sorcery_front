import { baseApi } from '@/shared/api/base-api';
import { adaptResponseWith } from '@/shared/lib/api/adaptResponse';
import { transformUser, transformUsers } from './transform';
import { ApiUser, User } from '@/entities/user/model/types';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: '/users',
            }),
            transformResponse: adaptResponseWith<ApiUser[], User[]>(
                transformUsers
            ),
            providesTags: ['User'],
        }),

        getUserById: builder.query<User, number>({
            query: (id) => `/users/${id}/`,
            transformResponse: adaptResponseWith<ApiUser, User>(
                transformUser
            ),
            providesTags: (_r, _e, id) => [{ type: 'User', id }],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
} = userApi;
