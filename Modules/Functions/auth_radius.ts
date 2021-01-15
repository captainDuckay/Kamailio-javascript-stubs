export interface auth_radius {
	proxy_authorize(srealm:string):number;
	proxy_authorize_user(srealm:string, suser:string):number;
	www_authorize(srealm:string):number;
	www_authorize_user(srealm:string, suser:string):number;
}