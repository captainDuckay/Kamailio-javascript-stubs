export interface sanity {
    sanity_check(mflags: number, uflags: number): number;

    sanity_check_defaults(): number;

    sanity_reply(): number;
}
