export interface tmx {
    t_cancel_branches(mode: string): number;

    t_cancel_callid(callid_s: string, cseq_s: string, fl: number): number;

    t_cancel_callid_reason(callid_s: string, cseq_s: string, fl: number, rcode: number): number;

    t_continue(tindex: number, tlabel: number, cbname: string): number;

    t_drop(): number;

    t_drop_rcode(rcode: number): number;

    t_flush_flags(): number;

    t_flush_xflags(): number;

    t_is_branch_route(): number;

    t_is_failure_route(): number;

    t_is_reply_route(): number;

    t_is_request_route(): number;

    t_precheck_trans(): number;

    t_reply_callid(callid_s: string, cseq_s: string, code: number, status_s: string): number;

    t_reuse_branch(): number;

    t_suspend(): number;
}
