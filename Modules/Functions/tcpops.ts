export interface tcpops {
    tcp_conid_alive(i_conid: number): number;

    tcp_conid_state(i_conid: number): number;

    tcp_enable_closed_event(): number;

    tcp_enable_closed_event_cid(i_conid: number): number;

    tcp_keepalive_disable(): number;

    tcp_keepalive_disable_cid(i_con: number): number;

    tcp_keepalive_enable(i_idle: number, i_cnt: number, i_intvl: number): number;

    tcp_keepalive_enable_cid(i_con: number, i_idle: number, i_cnt: number, i_intvl: number): number;

    tcp_set_connection_lifetime(i_time: number): number;

    tcp_set_connection_lifetime_cid(i_conid: number, i_time: number): number;

    tcp_set_otcpid(vconid: number): number;

    tcp_set_otcpid_flag(vmode: number): number;
}
