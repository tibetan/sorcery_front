export type ApiFilters = Record<string, string | string[]>;

export type DummyArgs = {
    url: string;
    method?: string;
    body?: unknown;
};