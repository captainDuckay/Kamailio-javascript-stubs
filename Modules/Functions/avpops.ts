export interface avpops {
    avp_check(param: string, check: string): number;

    avp_copy(name1: string, name2: string): number;
}
