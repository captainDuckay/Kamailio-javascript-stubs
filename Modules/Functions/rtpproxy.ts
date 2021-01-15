export interface rtpproxy {
    rtpproxy_answer(flags: string): number;

    rtpproxy_answer_ip(flags: string, mip: string): number;

    rtpproxy_answer0(): number;

    rtpproxy_destroy(flags: string): number;

    rtpproxy_destroy0(): number;

    rtpproxy_manage(flags: string): number;

    rtpproxy_manage_ip(flags: string, mip: string): number;

    rtpproxy_manage0(): number;

    rtpproxy_offer(flags: string): number;

    rtpproxy_offer_ip(flags: string, mip: string): number;

    rtpproxy_offer0(): number;

    rtpproxy_stop_stream2uac(): number;

    rtpproxy_stop_stream2uas(): number;

    rtpproxy_stream2uac(pname: string, count: number): number;

    rtpproxy_stream2uas(pname: string, count: number): number;

    set_rtpproxy_set(rset: number): number;

    start_recording(): number;
}
