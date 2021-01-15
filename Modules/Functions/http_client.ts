export interface http_client {
	curl_connect(con:string, url:string, dpv:string):number;
	curl_connect_post(con:string, url:string, ctype:string, data:string, dpv:string):number;
	query(url:string, dpv:string):number;
	query_post(url:string, post:string, dpv:string):number;
	query_post_hdrs(url:string, post:string, hdrs:string, dpv:string):number;
}