export interface kazoo {
    kazoo_publish(exchange: string, routing_key: string, payload: string): number;

    kazoo_subscribe(payload: string): number;
}
