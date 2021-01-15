export interface speeddial {
    lookup(stable: string): number;

    lookup_owner(stable: string, sowner: string): number;
}
