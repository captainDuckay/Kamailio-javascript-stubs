export interface drouting {
    do_routing(grp_id: number): number;

    do_routing_furi(): number;

    goes_to_gw(): number;

    goes_to_gw_type(type: number): number;

    is_from_gw(): number;

    is_from_gw_type(type: number): number;

    is_from_gw_type_flags(type: number, flags: number): number;

    next_routing(): number;

    use_next_gw(): number;
}
