import { Resource } from "./resource"

export interface Resources {
    available: number
    collectionURI: string
    items: Resource[]
    returned: number
}