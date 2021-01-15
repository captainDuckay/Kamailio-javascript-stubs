export interface dialog {
    dlg_bridge(sfrom: string, sto: string, soproxy: string): number;

    dlg_bye(side: string): number;

    dlg_db_load_callid(callid: string): number;

    dlg_db_load_extra(): number;

    dlg_get(sc: string, sf: string, st: string): number;

    dlg_isflagset(val: number): number;

    dlg_manage(): number;

    dlg_reset_property(pval: string): number;

    dlg_resetflag(val: number): number;

    dlg_set_property(pval: string): number;

    dlg_set_timeout(to: number): number;

    dlg_set_timeout_id(to: number, he: number, hi: number): number;

    dlg_setflag(val: number): number;

    get_profile_size(sprofile: string, svalue: string, spv: string): number;

    get_profile_size_static(sprofile: string, spv: string): number;

    is_in_profile(sprofile: string, svalue: string): number;

    is_in_profile_static(sprofile: string): number;

    is_known_dlg(): number;

    set_dlg_profile(sprofile: string, svalue: string): number;

    set_dlg_profile_static(sprofile: string): number;

    unset_dlg_profile(sprofile: string, svalue: string): number;

    unset_dlg_profile_static(sprofile: string): number;

    var_get(name: string): number;

    var_gete(name: string): number;

    var_getw(name: string): number;

    var_is_null(name: string): number;

    var_rm(name: string): number;

    var_sets(name: string, val: string): number;
}
