import { IApiUser, IUser } from '../../types/user';

const users: IApiUser[] = [
    {
        id: 1,
        name: 'Test user 1',
        email: 'test.user_01@gmail.com',
        email_verified_at: null,
        created_at: '2025-07-09T23:31:32.000000Z',
        updated_at: '2025-07-10T23:31:32.000000Z',
    },
    {
        id: 2,
        name: 'Test user 2',
        email: 'test.user_02@gmail.com',
        email_verified_at: null,
        created_at: '2025-07-09T23:31:32.000000Z',
        updated_at: '2025-07-10T23:31:32.000000Z',
    }
];

const transformUser = (user: IApiUser): IUser => ({
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerifiedAt: user.email_verified_at,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
});

const getUsers = (): Promise<IUser[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (Math.random() < 0.25) {
            //     reject(new Error('Something bad happened'));
            // } else {
            const transformed = users.map(transformUser);
            resolve(transformed);
            // }
        }, 900);
    });
};

export { users, transformUser, getUsers };
