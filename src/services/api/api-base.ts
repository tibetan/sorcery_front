export const API_BASE = 'http://localhost/api';

export const getResource = async (url: string) => {
    const res = await fetch(`${API_BASE}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
};
