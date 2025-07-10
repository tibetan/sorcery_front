interface IUser {
    id: number;
    name: string;
    email: string;
    emailVerifiedAt?: string | null;
    createdAt?: string;
    updatedAt?: string;
}

export default IUser;