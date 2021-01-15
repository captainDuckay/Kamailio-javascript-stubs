export interface rtpengine {
    block_dtmf(flags: string): number;

    block_dtmf0(): number;

    block_media(flags: string): number;

    block_media0(): number;

    play_media(flags: string): number;

    rtpengine_answer(flags: string): number;

    rtpengine_answer0(): number;

    rtpengine_delete(flags: string): number;

    rtpengine_delete0(): number;

    rtpengine_manage(flags: string): number;

    rtpengine_manage0(): number;

    rtpengine_offer(flags: string): number;

    rtpengine_offer0(): number;

    rtpengine_query(flags: string): number;

    rtpengine_query0(): number;

    set_rtpengine_set(r1: number): number;

    set_rtpengine_set2(r1: number, r2: number): number;

    start_recording(): number;

    stop_media(flags: string): number;

    stop_media0(): number;

    stop_recording(): number;

    unblock_dtmf(flags: string): number;

    unblock_dtmf0(): number;

    unblock_media(flags: string): number;

    unblock_media0(): number;
}
