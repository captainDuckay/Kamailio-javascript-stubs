export interface presence_xml {
	pres_check_activities(pres_uri:string, activity:string):number;
	pres_check_basic(pres_uri:string, status:string):number;
}