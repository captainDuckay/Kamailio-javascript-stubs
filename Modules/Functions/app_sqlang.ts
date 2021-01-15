export interface app_sqlang {
	dofile(script:string):number;
	dostring(script:string):number;
	run(func:string):number;
	run_p1(func:string, p1:string):number;
	run_p2(func:string, p1:string, p2:string):number;
	run_p3(func:string, p1:string, p2:string, p3:string):number;
	runstring(script:string):number;
}