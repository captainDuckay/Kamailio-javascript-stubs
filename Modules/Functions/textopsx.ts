export interface textopsx {
    append_hf_value(hexp: string, val: string): number;

    assign_hf_value(hexp: string, val: string): number;

    assign_hf_value2(hexp: string, val: string): number;

    change_reply_status(code: number, reason: string): number;

    change_reply_status_code(code: number): number;

    exclude_hf_value(hexp: string, val: string): number;

    fnmatch(val: string, match: string): number;

    fnmatch_ex(val: string, match: string, flags: string): number;

    hf_value_exists(hexp: string, val: string): number;

    include_hf_value(hexp: string, val: string): number;

    insert_hf_value(hexp: string, val: string): number;

    keep_hf(): number;

    keep_hf_re(sre: string): number;

    msg_apply_changes(): number;

    msg_set_buffer(obuf: string): number;

    remove_body(): number;

    remove_hf_value(hexp: string): number;

    remove_hf_value2(hexp: string, val: string): number;
}
