export interface xlog {
    xalert(lmsg: string): number;

    xcrit(lmsg: string): number;

    xdbg(lmsg: string): number;

    xerr(lmsg: string): number;

    xinfo(lmsg: string): number;

    xlog(slevel: string, lmsg: string): number;

    xnotice(lmsg: string): number;

    xwarn(lmsg: string): number;
}
