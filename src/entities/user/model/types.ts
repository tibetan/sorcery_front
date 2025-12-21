export interface ApiUser {
    id: number;
    name: string;
    created_at?: string;
    updated_at?: string;
}

export interface User {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export type CreateUserDto = Omit<ApiUser, 'id'>;
