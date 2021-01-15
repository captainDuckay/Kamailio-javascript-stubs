export interface uac_redirect {
	get_redirects(max_c:number, max_b:number):number;
	get_redirects_acc(max_c:number, max_b:number, reason:string):number;
	get_redirects_all():number;
}