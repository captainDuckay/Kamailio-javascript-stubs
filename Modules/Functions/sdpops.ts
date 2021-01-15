export interface sdpops {
    keep_codecs_by_id(codecs: string, media: string): number;

    keep_codecs_by_name(codecs: string, media: string): number;

    remove_codecs_by_id(codecs: string, media: string): number;

    remove_codecs_by_name(codecs: string, media: string): number;

    remove_line_by_prefix(prefix: string, media: string): number;

    remove_media(media: string): number;

    sdp_content(): number;

    sdp_content_flags(flags: number): number;

    sdp_get(avp: string): number;

    sdp_get_line_startswith(aname: string, sline: string): number;

    sdp_print(llevel: number): number;

    sdp_transport(avp: string): number;

    sdp_with_active_media(media: string): number;

    sdp_with_codecs_by_id(codecs: string): number;

    sdp_with_codecs_by_name(codecs: string): number;

    sdp_with_ice(): number;

    sdp_with_media(media: string): number;

    sdp_with_transport(transport: string): number;

    sdp_with_transport_like(transport: string): number;
}
