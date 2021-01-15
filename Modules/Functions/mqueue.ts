export interface mqueue {
    mq_add(mq: string, key: string, val: string): number;

    mq_fetch(mq: string): number;

    mq_pv_free(mq: string): number;

    mq_size(mq: string): number;

    mqk_get(qname: string): number;

    mqk_gete(qname: string): number;

    mqk_getw(qname: string): number;

    mqv_get(qname: string): number;

    mqv_gete(qname: string): number;

    mqv_getw(qname: string): number;
}
