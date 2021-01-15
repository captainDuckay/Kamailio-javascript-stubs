export interface maxfwd {
    is_maxfwd_lt(limit: number): number;

    process_maxfwd(limit: number): number;
}
