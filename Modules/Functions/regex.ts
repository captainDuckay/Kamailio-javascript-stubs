export interface regex {
    pcre_match(string: string, regex: string): number;

    pcre_match_group(string: string, num_pcre: number): number;
}
