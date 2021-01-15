export interface xhttp_prom {
	check_uri():number;
	counter_inc_l0(s_name:string, number:number):number;
	counter_inc_l1(s_name:string, number:number, l1:string):number;
	counter_inc_l2(s_name:string, number:number, l1:string, l2:string):number;
	counter_inc_l3(s_name:string, number:number, l1:string, l2:string, l3:string):number;
	counter_reset_l0(s_name:string):number;
	counter_reset_l1(s_name:string, l1:string):number;
	counter_reset_l2(s_name:string, l1:string, l2:string):number;
	counter_reset_l3(s_name:string, l1:string, l2:string, l3:string):number;
	dispatch():number;
	gauge_reset_l0(s_name:string):number;
	gauge_reset_l1(s_name:string, l1:string):number;
	gauge_reset_l2(s_name:string, l1:string, l2:string):number;
	gauge_reset_l3(s_name:string, l1:string, l2:string, l3:string):number;
	gauge_set_l0(s_name:string, s_number:string):number;
	gauge_set_l1(s_name:string, s_number:string, l1:string):number;
	gauge_set_l2(s_name:string, s_number:string, l1:string, l2:string):number;
	gauge_set_l3(s_name:string, s_number:string, l1:string, l2:string, l3:string):number;
	histogram_observe_l0(s_name:string, s_number:string):number;
	histogram_observe_l1(s_name:string, s_number:string, l1:string):number;
	histogram_observe_l2(s_name:string, s_number:string, l1:string, l2:string):number;
	histogram_observe_l3(s_name:string, s_number:string, l1:string, l2:string, l3:string):number;
}