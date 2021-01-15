export interface secsipid {
    secsipid_add_identity(origtn: string, desttn: string, attest: string, origid: string, x5u: string, keypath: string): number;

    secsipid_check_identity(keypath: string): number;

    secsipid_check_identity_pubkey(keyval: string): number;

    secsipid_get_url(surl: string): number;
}
