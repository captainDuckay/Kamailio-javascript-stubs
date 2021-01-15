export interface xmlrpc {
    dispatch_rpc(): number;

    xmlrpc_reply(rcode: number, reason: string): number;
}
