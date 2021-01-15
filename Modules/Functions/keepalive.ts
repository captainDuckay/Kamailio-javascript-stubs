export interface keepalive {
    add_destination(uri: string, owner: string): number;

    del_destination(uri: string, owner: string): number;

    is_alive(dest: string): number;
}
