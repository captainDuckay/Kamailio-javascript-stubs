export interface sl {
    send_reply(code: number, reason: string): number;

    send_reply_mode(code: number, reason: string, mode: number): number;

    sl_forward_reply(code: string, reason: string): number;

    sl_reply_error(): number;

    sl_send_reply(code: number, reason: string): number;
}
