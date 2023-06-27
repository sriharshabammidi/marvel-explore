import { Resource } from "./resource"

export interface Events {
    available: number
    collectionURI: string
    items: Resource[]
    returned: number
}