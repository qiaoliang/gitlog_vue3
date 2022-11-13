import ChangedFile from "./ChangedFile";
export default interface RevDetail {
    id: number;
    rev: string;
    brief: string;
    detail: string;
    changes?: ChangedFile[] | null;
}
