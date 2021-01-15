export interface domain {
    is_domain_local(sdomain: string): number;

    is_from_local(): number;

    is_uri_host_local(): number;

    lookup_domain(_sdomain: string): number;

    lookup_domain_prefix(_sdomain: string, _sprefix: string): number;
}
