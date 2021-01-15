export interface sca {
    call_info_update(update_mask: number, uri_to: string, uri_from: string): number;

    call_info_update_default(): number;

    call_info_update_mask(umask: number): number;

    call_info_update_turi(umask: number, sto: string): number;

    handle_subscribe(): number;
}
