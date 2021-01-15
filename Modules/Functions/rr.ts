export interface rr {
    add_rr_param(sparam: string): number;

    check_route_param(sre: string): number;

    is_direction(dir: string): number;

    loose_route(): number;

    loose_route_mode(vmode: number): number;

    loose_route_preloaded(): number;

    next_hop_route(): number;

    record_route(): number;

    record_route_advertised_address(addr: string): number;

    record_route_params(sparams: string): number;

    record_route_preset(addr1: string, addr2: string): number;

    record_route_preset_one(addr1: string): number;

    remove_record_route(): number;
}
