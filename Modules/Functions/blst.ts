export interface blst {
    blst_add(t: number): number;

    blst_add_default(): number;

    blst_add_retry_after(t_min: number, t_max: number): number;

    blst_clear_ignore(mask: number): number;

    blst_clear_ignore_all(): number;

    blst_del(): number;

    blst_is_blocklisted(): number;

    blst_rpl_clear_ignore(mask: number): number;

    blst_rpl_clear_ignore_all(): number;

    blst_rpl_set_ignore(mask: number): number;

    blst_rpl_set_ignore_all(): number;

    blst_set_ignore(mask: number): number;

    blst_set_ignore_all(): number;
}
