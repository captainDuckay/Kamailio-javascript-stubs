export interface rls {
    handle_notify(): number;

    handle_subscribe(): number;

    handle_subscribe_uri(wuri: string): number;

    update_subs(uri: string, event: string): number;
}
