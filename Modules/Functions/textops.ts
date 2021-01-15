export interface textops {
    append_body_part(txt: string, ct: string): number;

    append_body_part_cd(txt: string, ct: string, cd: string): number;

    append_body_part_hex(txt: string, ct: string): number;

    append_body_part_hex_cd(htxt: string, ct: string, cd: string): number;

    cmp_istr(s1: string, s2: string): number;

    cmp_str(s1: string, s2: string): number;

    filter_body(content_type: string): number;

    get_body_part(ctype: string, pvname: string): number;

    get_body_part_raw(ctype: string, pvname: string): number;

    has_body(): number;

    has_body_type(ctype: string): number;

    in_list(subject: string, list: string, vsep: string): number;

    in_list_prefix(subject: string, list: string, vsep: string): number;

    is_audio_on_hold(): number;

    is_present_hf(hname: string): number;

    is_present_hf_re(ematch: string): number;

    is_privacy(privacy: string): number;

    regex_substring(input: string, regex: string, mindex: number, nmatch: number, dst: string): number;

    remove_body_part(content_type: string): number;

    remove_hf(hname: string): number;

    remove_hf_exp(ematch: string, eskip: string): number;

    remove_hf_re(ematch: string): number;

    replace(sre: string, sval: string): number;

    replace_all(sre: string, sval: string): number;

    replace_body(sre: string, sval: string): number;

    replace_body_all(sre: string, sval: string): number;

    replace_body_atonce(sre: string, sval: string): number;

    replace_body_str(mkey: string, rval: string, rmode: string): number;

    replace_hdrs(sre: string, sval: string): number;

    replace_hdrs_str(mkey: string, rval: string, rmode: string): number;

    replace_str(mkey: string, rval: string, rmode: string): number;

    search(sre: string): number;

    search_append(ematch: string, val: string): number;

    search_append_body(ematch: string, val: string): number;

    search_body(sre: string): number;

    search_hf(hname: string, sre: string, flags: string): number;

    set_body(nb: string, nc: string): number;

    set_body_multipart(nbody: string, ctype: string, boundary: string): number;

    set_body_multipart_boundary(boundary: string): number;

    set_body_multipart_content(nbody: string, ctype: string): number;

    set_body_multipart_mode(): number;

    set_reply_body(nb: string, nc: string): number;

    starts_with(s1: string, s2: string): number;

    subst(subst: string): number;

    subst_body(subst: string): number;

    subst_hf(hname: string, subst: string, flags: string): number;

    subst_uri(subst: string): number;

    subst_user(subst: string): number;
}
