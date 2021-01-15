export interface rabbitmq {
    publish(exchange: string, routingkey: string, contenttype: string, messagebody: string): number;

    publish_consume(exchange: string, routingkey: string, contenttype: string, messagebody: string, dpv: string): number;
}
