export interface websocket {
    close(): number;

    close_conid(status: number, reason: string, con: number): number;

    close_reason(status: number, reason: string): number;

    handle_handshake(): number;
}
