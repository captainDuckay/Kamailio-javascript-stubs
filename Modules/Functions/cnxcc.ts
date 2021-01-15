export interface cnxcc {
    get_channel_count(sclient: string, pvname: string): number;

    set_max_channels(sclient: string, max_chan: number): number;

    set_max_credit(sclient: string, scredit: string, sconnect: string, scps: string, initp: number, finishp: number): number;

    set_max_time(sclient: string, max_secs: number): number;

    terminate_all(sclient: string): number;

    update_max_time(sclient: string, secs: number): number;
}
