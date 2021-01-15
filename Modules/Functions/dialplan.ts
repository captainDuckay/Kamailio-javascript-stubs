export interface dialplan {
    dp_match(dpid: number, src: string): number;

    dp_replace(dpid: number, src: string, dst: string): number;
}
