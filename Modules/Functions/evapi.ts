export interface evapi {
    async_multicast(sdata: string, stag: string): number;

    async_relay(sdata: string): number;

    async_unicast(sdata: string, stag: string): number;

    close(): number;

    relay(sdata: string): number;

    relay_multicast(sdata: string, stag: string): number;

    relay_unicast(sdata: string, stag: string): number;

    set_tag(stag: string): number;
}
