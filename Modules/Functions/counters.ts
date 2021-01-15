export interface counters {
    add(sname: string, v: number): number;

    inc(sname: string): number;

    reset(sname: string): number;
}
