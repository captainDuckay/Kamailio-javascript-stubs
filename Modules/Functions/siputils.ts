export interface siputils {
    contact_param_decode(nparam: string): number;

    contact_param_decode_ruri(nparam: string): number;

    contact_param_encode(nparam: string, saddr: string): number;

    contact_param_rm(nparam: string): number;

    decode_contact(): number;

    decode_contact_header(): number;

    encode_contact(eprefix: string, eaddr: string): number;

    has_totag(): number;

    is_alphanum(tval: string): number;

    is_alphanumex(tval: string, eset: string): number;

    is_first_hop(): number;

    is_numeric(tval: string): number;

    is_reply(): number;

    is_request(): number;

    is_tel_number(tval: string): number;

    is_uri(suri: string): number;

    is_user(suser: string): number;

    options_reply(): number;

    uri_param(sparam: string): number;

    uri_param_any(sparam: string): number;

    uri_param_rm(sparam: string): number;

    uri_param_value(sparam: string, svalue: string): number;
}
