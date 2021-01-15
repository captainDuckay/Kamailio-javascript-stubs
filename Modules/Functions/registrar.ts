export interface registrar {
    add_sock_hdr(hdr_name: string): number;

    lookup(table: string): number;

    lookup_branches(_dtable: string): number;

    lookup_to_dset(table: string, uri: string): number;

    lookup_uri(table: string, uri: string): number;

    reg_fetch_contacts(dtable: string, uri: string, profile: string): number;

    reg_free_contacts(profile: string): number;

    reg_send_reply(): number;

    registered(table: string): number;

    registered_action(_dtable: string, _uri: string, _f: number, _aflags: number): number;

    registered_flags(_dtable: string, _uri: string, _f: number): number;

    registered_uri(_dtable: string, _uri: string): number;

    save(table: string, flags: number): number;

    save_uri(table: string, flags: number, uri: string): number;

    set_q_override(new_q: string): number;

    unregister(_dtable: string, _uri: string): number;

    unregister_ruid(_dtable: string, _uri: string, _ruid: string): number;
}
