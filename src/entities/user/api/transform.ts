import { ApiUser, User } from '@/entities/user/model/types';

export const transformUser = (user: ApiUser): User => ({
    id: user.id,
    name: user.name,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
});

export const transformUsers = (api: ApiUser[]): User[] =>
    api.map(transformUser);