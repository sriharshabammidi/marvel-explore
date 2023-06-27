import { Data } from "./Data"

export interface Response<T> {
    code: number
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    etag: string
    data: Data<T>
}