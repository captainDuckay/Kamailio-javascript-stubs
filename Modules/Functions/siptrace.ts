export interface siptrace {
    hlog(message: string): number;

    hlog_cid(correlationid: string, message: string): number;

    sip_trace(): number;

    sip_trace_dst(duri: string): number;

    sip_trace_dst_cid(duri: string, cid: string): number;

    sip_trace_dst_cid_type(duri: string, cid: string, sflag: string): number;

    sip_trace_mode(smode: string): number;
}
