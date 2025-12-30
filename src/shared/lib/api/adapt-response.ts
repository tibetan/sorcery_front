import { AnyObject } from './types';

export function adaptResponseWith<Api, Result>(
    transform: (data: Api) => Result,
    key?: string
) {
    return (response: Api | { results: Api } | { data: AnyObject }): Result => {
        // { results: ... }
        if (typeof response === 'object' && response !== null && 'results' in response) {
            return transform((response as any).results);
        }

        // { data: { key: ... } }
        if (
            typeof response === 'object' &&
            response !== null &&
            'data' in response &&
            key &&
            (response as any).data?.[key] !== undefined
        ) {
            return transform((response as any).data[key]);
        }

        // plain response
        return transform(response as Api);
    };
}
