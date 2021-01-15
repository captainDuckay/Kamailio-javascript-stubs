export interface kafka {
    send(s_topic: string, s_message: string): number;

    send_key(s_topic: string, s_message: string, s_key: string): number;
}
