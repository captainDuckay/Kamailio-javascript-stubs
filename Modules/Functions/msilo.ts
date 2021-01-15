export interface msilo {
    mdump(): number;

    mdump_uri(owner_s: string): number;

    mstore(): number;

    mstore_uri(owner_s: string): number;
}
