export interface uac {
    uac_auth(): number;

    uac_auth_mode(mode: number): number;

    uac_reg_disable(attr: string, val: string): number;

    uac_reg_enable(attr: string, val: string): number;

    uac_reg_lookup(userid: string, sdst: string): number;

    uac_reg_refresh(l_uuid: string): number;

    uac_reg_request_to(userid: string, imode: number): number;

    uac_reg_status(sruuid: string): number;

    uac_replace_from(pdsp: string, puri: string): number;

    uac_replace_from_uri(puri: string): number;

    uac_replace_to(pdsp: string, puri: string): number;

    uac_replace_to_uri(puri: string): number;

    uac_req_send(): number;

    uac_restore_from(): number;

    uac_restore_to(): number;
}
