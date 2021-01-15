export interface pvx {
    avp_get(xname: string): number;

    avp_gete(xname: string): number;

    avp_getw(xname: string): number;

    avp_is_null(xname: string): number;

    avp_rm(xname: string): number;

    avp_seti(xname: string, vn: number): number;

    avp_sets(xname: string, vs: string): number;

    evalx(dst: string, fmt: string): number;

    pv_var_to_xavp(varname: string, xname: string): number;

    pv_xavi_print(): number;

    pv_xavp_print(): number;

    pv_xavp_to_var(xname: string): number;

    pv_xavu_print(): number;

    sbranch_append(): number;

    sbranch_reset(): number;

    sbranch_set_ruri(): number;

    shv_get(vname: string): number;

    shv_seti(vname: string, ival: number): number;

    shv_sets(vname: string, sval: string): number;

    var_get(vname: string): number;

    var_seti(vname: string, ival: number): number;

    var_sets(vname: string, sval: string): number;

    xavi_child_get(rname: string, cname: string): number;

    xavi_child_gete(rname: string, cname: string): number;

    xavi_child_getw(rname: string, cname: string): number;

    xavi_child_is_null(rname: string, cname: string): number;

    xavi_child_rm(rname: string, cname: string): number;

    xavi_child_seti(rname: string, cname: string, ival: number): number;

    xavi_child_sets(rname: string, cname: string, sval: string): number;

    xavi_get(rname: string): number;

    xavi_get_keys(rname: string, indx: number): number;

    xavi_getd(rname: string): number;

    xavi_getd_p1(rname: string, indx: number): number;

    xavi_gete(rname: string): number;

    xavi_getw(rname: string): number;

    xavi_is_null(rname: string): number;

    xavi_rm(rname: string): number;

    xavi_seti(rname: string, ival: number): number;

    xavi_sets(rname: string, sval: string): number;

    xavp_child_get(rname: string, cname: string): number;

    xavp_child_gete(rname: string, cname: string): number;

    xavp_child_getw(rname: string, cname: string): number;

    xavp_child_is_null(rname: string, cname: string): number;

    xavp_child_rm(rname: string, cname: string): number;

    xavp_child_seti(rname: string, cname: string, ival: number): number;

    xavp_child_sets(rname: string, cname: string, sval: string): number;

    xavp_copy(src_name: string, src_idx: number, dst_name: string): number;

    xavp_copy_dst(src_name: string, src_idx: number, dst_name: string, dst_idx: number): number;

    xavp_get(rname: string): number;

    xavp_get_keys(rname: string, indx: number): number;

    xavp_getd(rname: string): number;

    xavp_getd_p1(rname: string, indx: number): number;

    xavp_gete(rname: string): number;

    xavp_getw(rname: string): number;

    xavp_is_null(rname: string): number;

    xavp_params_explode(sparams: string, sxname: string): number;

    xavp_params_implode(sxname: string, svname: string): number;

    xavp_rm(rname: string): number;

    xavp_seti(rname: string, ival: number): number;

    xavp_sets(rname: string, sval: string): number;

    xavp_slist_explode(slist: string, sep: string, mode: string, sxname: string): number;

    xavu_child_get(rname: string, cname: string): number;

    xavu_child_gete(rname: string, cname: string): number;

    xavu_child_getw(rname: string, cname: string): number;

    xavu_child_is_null(rname: string, cname: string): number;

    xavu_child_rm(rname: string, cname: string): number;

    xavu_child_seti(rname: string, cname: string, ival: number): number;

    xavu_child_sets(rname: string, cname: string, sval: string): number;

    xavu_get(rname: string): number;

    xavu_gete(rname: string): number;

    xavu_getw(rname: string): number;

    xavu_is_null(rname: string): number;

    xavu_rm(rname: string): number;

    xavu_seti(rname: string, ival: number): number;

    xavu_sets(rname: string, sval: string): number;
}
