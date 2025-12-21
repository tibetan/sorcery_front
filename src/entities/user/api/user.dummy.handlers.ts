import { users } from './user.dummy';
import { ApiUser, CreateUserDto} from "@/entities/user/model/types";

const isCreateUserDto = (body: unknown): body is CreateUserDto => {
    if (!body || typeof body !== 'object') return false;

    const b = body as Record<string, unknown>;

    return (
        typeof b.title === 'string' &&
        typeof b.author === 'string' &&
        typeof b.price === 'number' &&
        typeof b.cover_image === 'string'
    );
};

export const handleUsers = (
    url: string,
    method: string,
    body?: unknown
) => {
    if (url === '/users' && method === 'GET') {
        return users;
    }

    if (url === '/users' && method === 'POST') {
        if (!isCreateUserDto(body)) {
            throw new Error('Invalid user payload');
        }

        const newUser: ApiUser = {
            id: Date.now(),
            ...body,
        };

        users.push(newUser);
        return newUser;
    }

    const userMatch = url.match(/^\/users\/(\d+)\/?$/);
    if (userMatch && method === 'GET') {
        const id = Number(userMatch[1]);
        const user = users.find((p) => p.id === id);

        if (!user) throw new Error('User not found');
        return user;
    }

    if (userMatch && method === 'PATCH') {
        const id = Number(userMatch[1]);
        const user = users.find((p) => p.id === id);
        if (!user) throw new Error('Yser not found');
        Object.assign(user, body);
        return user;
    }

    throw new Error('Not found');
};
