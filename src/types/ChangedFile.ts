export default interface ChangedFile {
    id: number;
    rev: string;
    origin:string;
    target?:string|null;
}
