export interface acc {
    acc_db_request(comment: string, dbtable: string): number;

    acc_log_request(comment: string): number;

    acc_request(comment: string, dbtable: string): number;
}
