export interface xcap_server {
	xcaps_del(uri:string, path:string):number;
	xcaps_get(uri:string, path:string):number;
	xcaps_put(uri:string, path:string, pbody:string):number;
}