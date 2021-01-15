export interface auth_ephemeral {
	autheph_authenticate(susername:string, spassword:string):number;
	autheph_check(srealm:string):number;
	autheph_proxy(srealm:string):number;
	autheph_www(srealm:string):number;
	autheph_www_method(srealm:string, smethod:string):number;
}