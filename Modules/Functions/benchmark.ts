export interface benchmark {
    bm_log_timer(tname: string): number;

    bm_start_timer(tname: string): number;
}
