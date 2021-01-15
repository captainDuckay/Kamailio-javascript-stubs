export interface sipdump {
    get_buf(): number;

    get_dst_ip(): number;

    get_src_ip(): number;

    get_tag(): number;

    send(stag: string): number;
}
