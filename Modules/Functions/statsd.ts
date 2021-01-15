export interface statsd {
    statsd_decr(key: string): number;

    statsd_gauge(key: string, val: string): number;

    statsd_incr(key: string): number;

    statsd_set(key: string, val: string): number;

    statsd_start(key: string): number;

    statsd_stop(key: string): number;
}
