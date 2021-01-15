export interface tsilo {
    ts_append(_table: string, _ruri: string): number;

    ts_append_to(tindex: number, tlabel: number, _table: string): number;

    ts_append_to_uri(tindex: number, tlabel: number, _table: string, _uri: string): number;

    ts_store(): number;

    ts_store_uri(puri: string): number;
}
