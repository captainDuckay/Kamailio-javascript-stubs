export interface sipcapture {
	float2int(_val:string, _coof:string):number;
	report_capture(_table:string):number;
	report_capture_cid(_table:string, _cid:string):number;
	report_capture_data(_table:string, _cid:string, _data:string):number;
	sip_capture():number;
	sip_capture_forward(puri:string):number;
	sip_capture_mode(_table:string, _cmdata:string):number;
	sip_capture_table(_table:string):number;
}