export interface lcr {
    defunct_gw(defunct_period: number): number;

    from_any_gw(): number;

    from_any_gw_addr(addr_str: string, transport: number): number;

    from_gw(lcr_id: number): number;

    from_gw_addr(lcr_id: number, addr_str: string, transport: number): number;

    inactivate_gw(): number;

    load_gws(lcr_id: number): number;

    load_gws_furi(lcr_id: number, ruri_user: string, from_uri: string): number;

    load_gws_ruser(lcr_id: number, ruri_user: string): number;

    next_gw(): number;

    to_any_gw(): number;

    to_any_gw_addr(addr_str: string, transport: number): number;

    to_gw(lcr_id: number): number;

    to_gw_addr(lcr_id: number, addr_str: string, transport: number): number;
}
