export interface tls {
    cget(aname: string): number;

    is_peer_verified(): number;
}
