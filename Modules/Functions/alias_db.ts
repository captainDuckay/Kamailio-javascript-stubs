export interface alias_db {
    lookup(stable: string): number;

    lookup_ex(stable: string, sflags: string): number;
}
