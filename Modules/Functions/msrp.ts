export interface msrp {
    cmap_lookup(): number;

    cmap_save(): number;

    is_reply(): number;

    is_request(): number;

    relay(): number;

    relay_flags(rtflags: number): number;

    reply(rcode: string, rtext: string, rhdrs: string): number;

    reply_flags(rtflags: number): number;

    set_dst(rtaddr: string, rfsock: string): number;
}
