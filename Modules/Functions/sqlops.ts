export interface sqlops {
    sql_is_null(sres: string, i: number, j: number): number;

    sql_num_columns(sres: string): number;

    sql_num_rows(sres: string): number;

    sql_pvquery(scon: string, squery: string, sres: string): number;

    sql_query(scon: string, squery: string, sres: string): number;

    sql_query_async(scon: string, squery: string): number;

    sql_result_free(sres: string): number;

    sql_result_get(resid: string, row, col: number): number;

    sql_result_gete(resid: string, row, col: number): number;

    sql_result_getz(resid: string, row, col: number): number;

    sql_xquery(scon: string, squery: string, xavp: string): number;
}
