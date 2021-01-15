export interface crypto {
    aes_decrypt(ins: string, keys: string, dpv: string): number;

    aes_encrypt(ins: string, keys: string, dpv: string): number;
}
