export interface path {
    add_path(): number;

    add_path_received(): number;

    add_path_received_user(_user: string): number;

    add_path_received_user_params(_user: string, _params: string): number;

    add_path_user(_user: string): number;

    add_path_user_params(_user: string, _params: string): number;
}
