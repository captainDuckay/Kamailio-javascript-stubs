export interface statistics {
	reset_stat(sname:string):number;
	update_stat(sname:string, sval:number):number;
}