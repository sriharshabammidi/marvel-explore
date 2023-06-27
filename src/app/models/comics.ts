import { Resource } from "./resource"

export interface Comics {
    available: number
    collectionURI: string
    items: Resource[]
    returned: number
}