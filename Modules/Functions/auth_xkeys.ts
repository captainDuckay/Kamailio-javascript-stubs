export interface auth_xkeys {
	auth_xkeys_add(shdr:string, skey:string, salg:string, sdata:string):number;
	auth_xkeys_check(shdr:string, skey:string, salg:string, sdata:string):number;
}