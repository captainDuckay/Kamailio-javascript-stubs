export interface corex {
    append_branch(): number;

    append_branch_uri(uri: string): number;

    append_branch_uri_q(uri: string, q: string): number;

    file_read(fname: string): number;

    file_write(fname: string, fdata: string): number;

    has_ruri_user(): number;

    has_user_agent(): number;

    is_faked_msg(): number;

    isxflagset(fval: number): number;

    resetxflag(fval: number): number;

    send_data(uri: string, data: string): number;

    sendx(uri: string, sock: string, data: string): number;

    set_recv_socket(ssock: string): number;

    set_recv_socket_name(ssock: string): number;

    set_send_socket(ssock: string): number;

    set_send_socket_name(ssock: string): number;

    set_source_address(saddr: string): number;

    setxflag(fval: number): number;

    via_add_srvid(fval: number): number;

    via_add_xavp_params(fval: number): number;

    via_use_xavp_fields(fval: number): number;
}
