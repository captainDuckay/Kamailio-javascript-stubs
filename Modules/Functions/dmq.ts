export interface dmq {
    bcast_message(peer_str: string, body_str: string, ct_str: string): number;

    handle_message(): number;

    handle_message_rc(returnval: number): number;

    is_from_node(): number;

    send_message(peer_str: string, to_str: string, body_str: string, ct_str: string): number;

    t_replicate(): number;

    t_replicate_mode(mode: number): number;
}
