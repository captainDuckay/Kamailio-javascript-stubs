export interface jsonrpcs {
    dispatch(): number;

    exec(scmd: string): number;

    execx(scmd: string): number;

    response(): number;
}
