export interface UploadedFile {
    id: number;
    name: string;
    size: number;
}

export interface sKey{
    keyStr: string | null;
    type: string | null;
}

export interface SessionKeys {
    privKey: sKey | null;
    pubKey: sKey | null;
}