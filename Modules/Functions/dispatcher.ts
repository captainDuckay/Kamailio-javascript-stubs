export interface dispatcher {
	ds_is_from_list(group:number):number;
	ds_is_from_list_mode(vset:number, vmode:number):number;
	ds_is_from_list_uri(vset:number, vmode:number, vuri:string):number;
	ds_is_from_lists():number;
	ds_list_exists(set:number):number;
	ds_load_unset():number;
	ds_load_update():number;
	ds_mark_dst():number;
	ds_mark_dst_state(sval:string):number;
	ds_next_domain():number;
	ds_next_dst():number;
	ds_reload():number;
	ds_select(set:number, alg:number):number;
	ds_select_domain(set:number, alg:number):number;
	ds_select_domain_limit(set:number, alg:number, limit:number):number;
	ds_select_dst(set:number, alg:number):number;
	ds_select_dst_limit(set:number, alg:number, limit:number):number;
	ds_select_limit(set:number, alg:number, limit:number):number;
	ds_select_routes(srules:string, smode:string):number;
	ds_select_routes_limit(srules:string, smode:string, rlimit:number):number;
	ds_set_domain():number;
	ds_set_dst():number;
}