export interface nathelper {
    add_contact_alias(): number;

    add_contact_alias_addr(ip_str: string, port_str: string, proto_str: string): number;

    add_rcv_param(upos: number): number;

    fix_nated_contact(): number;

    fix_nated_register(): number;

    fix_nated_sdp(level: number): number;

    fix_nated_sdp_ip(level: number, ip: string): number;

    handle_ruri_alias(): number;

    is_rfc1918(address: string): number;

    nat_uac_test(tests: number): number;

    set_alias_to_pv(uri_avp: string): number;

    set_contact_alias(): number;

    set_contact_alias_trim(): number;
}
