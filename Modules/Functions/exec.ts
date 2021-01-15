export interface exec {
    exec_avp(cmd: string): number;

    exec_cmd(cmd: string): number;

    exec_dset(cmd: string): number;

    exec_msg(cmd: string): number;
}
