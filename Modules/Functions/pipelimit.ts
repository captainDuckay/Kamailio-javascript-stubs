export interface pipelimit {
    pl_check(pipeid: string): number;

    pl_check_limit(pipeid: string, alg: string, limit: number): number;

    pl_drop(): number;

    pl_drop_range(rmin: number, rmax: number): number;

    pl_drop_retry(rafter: number): number;
}
