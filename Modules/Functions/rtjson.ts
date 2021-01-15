export interface rtjson {
    init_routes(srdoc: string): number;

    next_route(): number;

    push_routes(): number;

    update_branch(): number;
}
