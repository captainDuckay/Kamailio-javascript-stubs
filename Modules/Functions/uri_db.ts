export interface uri_db {
    check_from(): number;

    check_to(): number;

    check_uri(suri: string): number;

    check_uri_realm(suri: string, susername: string, srealm: string): number;

    does_uri_exist(): number;
}
