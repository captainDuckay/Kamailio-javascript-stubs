export interface ndb_redis {
    redis_cmd(srv: string, rcmd: string, sres: string): number;

    redis_cmd_p1(srv: string, rcmd: string, p1: string, sres: string): number;

    redis_cmd_p2(srv: string, rcmd: string, p1: string, p2: string, sres: string): number;

    redis_cmd_p3(srv: string, rcmd: string, p1: string, p2: string, p3: string, sres: string): number;

    redis_free(name: string): number;
}
