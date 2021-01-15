export interface permissions {
	allow_address(addr_group:number, ips:string, port:number):number;
	allow_address_group(_addr:string, _port:number):number;
	allow_source_address(addr_group:number):number;
	allow_source_address_group():number;
	allow_trusted():number;
}