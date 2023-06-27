import { Resource } from "./resource"

export interface Series {
    available: number
    collectionURI: string
    items: Resource[]
    returned: number
}