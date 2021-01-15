export interface _enum {
    enum_i_query_suffix(vsuffix: string): number;

    enum_pv_query(ve164: string): number;

    enum_pv_query_suffix(ve164: string, vsuffix: string): number;

    enum_pv_query_suffix_service(ve164: string, vsuffix: string, vservice: string): number;

    enum_query(): number;

    enum_query_suffix(vsuffix: string): number;

    enum_query_suffix_service(vsuffix: string, vservice: string): number;

    i_enum_query(): number;

    i_enum_query_suffix_service(vsuffix: string, vservice: string): number;

    is_from_user_enum(): number;

    is_from_user_enum_suffix(vsuffix: string): number;

    is_from_user_enum_suffix_service(vsuffix: string, vservice: string): number;
}
