export interface presence {
    handle_publish(): number;

    handle_publish_uri(sender_uri: string): number;

    handle_subscribe(): number;

    handle_subscribe_uri(wuri: string): number;

    pres_auth_status(watcher_uri: string, presentity_uri: string): number;

    pres_has_subscribers(pres_uri: string, wevent: string): number;

    pres_refresh_watchers(pres: string, event: string, type: number): number;

    pres_refresh_watchers_file(pres: string, event: string, type: number, file_uri: string, filename: string): number;

    pres_update_watchers(pres_uri: string, event: string): number;
}
