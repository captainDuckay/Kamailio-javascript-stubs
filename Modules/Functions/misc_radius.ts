export interface misc_radius {
	does_uri_exist():number;
	does_uri_exist_uval(suri:string):number;
	does_uri_user_exist():number;
	does_uri_user_exist_uval(user:string):number;
	is_user_in(user:string, group:string):number;
	load_callee_avps(user:string):number;
	load_caller_avps(user:string):number;
}