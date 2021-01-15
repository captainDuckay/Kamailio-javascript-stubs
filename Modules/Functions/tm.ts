export interface tm {
    ki_t_load_contacts_mode(mode: number): number;

    t_any_replied(): number;

    t_any_timeout(): number;

    t_branch_replied(): number;

    t_branch_timeout(): number;

    t_check_status(sexp: string): number;

    t_check_trans(): number;

    t_clean(): number;

    t_drop_replies(mode: string): number;

    t_drop_replies_all(): number;

    t_get_branch_index(): number;

    t_get_status_code(): number;

    t_grep_status(code: number): number;

    t_is_canceled(): number;

    t_is_expired(): number;

    t_is_retr_async_reply(): number;

    t_is_set(target: string): number;

    t_load_contacts(): number;

    t_lookup_cancel(): number;

    t_lookup_cancel_flags(flags: number): number;

    t_lookup_request(): number;

    t_newtran(): number;

    t_next_contact_flow(): number;

    t_next_contacts(): number;

    t_on_branch(rname: string): number;

    t_on_branch_failure(rname: string): number;

    t_on_failure(rname: string): number;

    t_on_reply(rname: string): number;

    t_relay(): number;

    t_relay_to_flags(rflags: number): number;

    t_relay_to_proto(sproto: string): number;

    t_relay_to_proto_addr(sproto: string, host: string, port: number): number;

    t_relay_to_proxy(sproxy: string): number;

    t_relay_to_proxy_flags(sproxy: string, rflags: number): number;

    t_release(): number;

    t_replicate(suri: string): number;

    t_reply(code: number, reason: string): number;

    t_reset_fr(): number;

    t_reset_max_lifetime(): number;

    t_reset_retr(): number;

    t_retransmit_reply(): number;

    t_save_lumps(): number;

    t_send_reply(code: number, reason: string): number;

    t_set_auto_inv_100(state: number): number;

    t_set_disable_6xx(state: number): number;

    t_set_disable_failover(state: number): number;

    t_set_disable_internal_reply(state: number): number;

    t_set_fr(fr_inv: number, fr: number): number;

    t_set_fr_inv(fr_inv: number): number;

    t_set_max_lifetime(t1: number, t2: number): number;

    t_set_no_e2e_cancel_reason(state: number): number;

    t_set_retr(t1: number, t2: number): number;

    t_uac_send(method: string, ruri: string, nexthop: string, ssock: string, hdrs: string, body: string): number;

    t_use_uac_headers(): number;
}
