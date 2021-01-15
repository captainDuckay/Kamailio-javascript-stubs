export interface diversion {
    add_diversion(reason: string): number;

    add_diversion_uri(reason: string, uri: string): number;
}
