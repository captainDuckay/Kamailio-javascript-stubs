export interface log_systemd {
	sd_journal_print(slev:string, stxt:string):number;
	sd_journal_send_xvap(xname:string):number;
}