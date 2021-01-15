export interface tmrec {
    is_leap_year(y: number): number;

    is_leap_year_now(): number;

    match(rv: string): number;

    match_timestamp(rv: string, ti: number): number;

    time_period_match(period: string): number;

    time_period_match_timestamp(period: string, ti: number): number;
}
