export interface ndb_mongodb {
	exec(ssrv:string, sdname:string, scname:string, scmd:string, sres:string):number;
	exec_simple(ssrv:string, sdname:string, scname:string, scmd:string, sres:string):number;
	execx(ssrv:string, sdname:string, scname:string, scmd:string, sres:string):number;
	find(ssrv:string, sdname:string, scname:string, scmd:string, sres:string):number;
	find_one(ssrv:string, sdname:string, scname:string, scmd:string, sres:string):number;
	free_reply(name:string):number;
	next_reply(name:string):number;
}