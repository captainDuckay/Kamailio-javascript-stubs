export interface ipops {
    compare_ips(_sval1: string, _sval2: string): number;

    compare_pure_ips(_sval1: string, _sval2: string): number;

    detailed_ip_type(_sval: string, _dpv: string): number;

    detailed_ipv4_type(_sval: string, _dpv: string): number;

    detailed_ipv6_type(_sval: string, _dpv: string): number;

    dns_int_match_ip(vhn: string, vip: string): number;

    dns_query(naptrname: string, pvid: string): number;

    dns_sys_match_ip(vhn: string, vip: string): number;

    ip_is_in_subnet(_sval1: string, _sval2: string): number;

    ip_type(sval: string): number;

    is_in_subnet(_sval1: string, _sval2: string): number;

    is_ip(sval: string): number;

    is_ip_rfc1918(sval: string): number;

    is_ip4(sval: string): number;

    is_ip6(sval: string): number;

    is_ip6_reference(sval: string): number;

    is_pure_ip(sval: string): number;

    naptr_query(naptrname: string, pvid: string): number;

    srv_query(naptrname: string, pvid: string): number;
}
