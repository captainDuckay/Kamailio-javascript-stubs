export interface pv_headers {
	pvh_append_header(hname:string, hvalue:string):number;
	pvh_apply_headers():number;
	pvh_check_header(hname:string):number;
	pvh_collect_headers():number;
	pvh_modify_header(hname:string, hvalue:string, indx:number):number;
	pvh_remove_header(hname:string, indx:number):number;
	pvh_reset_headers():number;
}