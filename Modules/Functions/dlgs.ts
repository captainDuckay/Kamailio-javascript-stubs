export interface dlgs {
    dlgs_count(vfield: string, vop: string, vdata: string): number;

    dlgs_init(src: string, dst: string, data: string): number;

    dlgs_tags_add(vtags: string): number;

    dlgs_tags_count(vtags: string): number;

    dlgs_tags_rm(vtags: string): number;

    dlgs_update(): number;
}
