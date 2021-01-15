export interface auth {
    auth_challenge(realm: string, flags: number): number;

    consume_credentials(): number;

    has_credentials(srealm: string): number;

    pv_auth_check(srealm: string, spasswd: string, vflags: number, vchecks: number): number;
}
