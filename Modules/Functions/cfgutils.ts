export interface cfgutils {
    abort(): number;

    check_route_exists(route: string): number;

    core_hash(s1: string, s2: string, sz: number): number;

    lock(lkey: string): number;

    pkg_status(): number;

    pkg_summary(): number;

    rand_event(): number;

    rand_get_prob(): number;

    rand_reset_prob(): number;

    rand_set_prob(percent_par: number): number;

    route_if_exists(route: string): number;

    shm_status(): number;

    shm_summary(): number;

    sleep(v: number): number;

    trylock(lkey: string): number;

    unlock(lkey: string): number;

    usleep(v: number): number;
}
