export interface htable {
    sht_dec(htname: string, itname: string): number;

    sht_get(htname: string, itname: string): number;

    sht_gete(htname: string, itname: string): number;

    sht_getw(htname: string, itname: string): number;

    sht_inc(htname: string, itname: string): number;

    sht_is_null(htname: string, itname: string): number;

    sht_iterator_end(iname: string): number;

    sht_iterator_next(iname: string): number;

    sht_iterator_start(iname: string, hname: string): number;

    sht_lock(htname: string, skey: string): number;

    sht_match_name(sname: string, sop: string, sval: string): number;

    sht_match_str_value(sname: string, sop: string, sval: string): number;

    sht_reset(hname: string): number;

    sht_rm(hname: string, iname: string): number;

    sht_rm_name(sname: string, sop: string, sval: string): number;

    sht_rm_name_re(htname: string, rexp: string): number;

    sht_rm_value(sname: string, sop: string, sval: string): number;

    sht_rm_value_re(htname: string, rexp: string): number;

    sht_setex(htname: string, itname: string, itval: number): number;

    sht_seti(htname: string, itname: string, itval: number): number;

    sht_sets(htname: string, itname: string, itval: string): number;

    sht_setxi(htname: string, itname: string, itval: number, exval: number): number;

    sht_setxs(htname: string, itname: string, itval: string, exval: number): number;

    sht_unlock(htname: string, skey: string): number;
}
