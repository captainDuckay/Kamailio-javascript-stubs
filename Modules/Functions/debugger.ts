export interface _debugger {
    dbg_pv_dump(): number;

    dbg_pv_dump_ex(mask: number, level: number): number;
}
