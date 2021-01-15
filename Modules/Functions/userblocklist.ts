export interface userblocklist {
	check_allowlist(stable:string):number;
	check_blocklist(stable:string):number;
	check_global_blocklist():number;
	check_user_allowlist(suser:string, sdomain:string):number;
	check_user_allowlist_number(suser:string, sdomain:string, snumber:string):number;
	check_user_allowlist_table(suser:string, sdomain:string, snumber:string, stable:string):number;
	check_user_blocklist(suser:string, sdomain:string):number;
	check_user_blocklist_number(suser:string, sdomain:string, snumber:string):number;
	check_user_blocklist_table(suser:string, sdomain:string, snumber:string, stable:string):number;
}