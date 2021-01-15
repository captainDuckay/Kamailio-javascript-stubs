export interface mqtt {
    publish(topic: string, payload: string, qos: number): number;

    subscribe(topic: string, qos: number): number;

    unsubscribe(topic: string): number;
}
