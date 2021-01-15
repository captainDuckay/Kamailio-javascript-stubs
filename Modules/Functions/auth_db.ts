export interface auth_db {
    auth_check(srealm: string, stable: string, iflags: number): number;

    is_subscriber(suri: string, stable: string, iflags: number): number;
}
