import { IApiUser, IUser } from '../../types/user';
import { getResource } from './api-base';

const transformUser = (user: IApiUser): IUser => ({
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerifiedAt: user.email_verified_at,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
});

export const getUsers = async (): Promise<IUser[]> => {
    const res = await getResource('/users/');
    return res.results.map(transformUser);
};

export { transformUser };
