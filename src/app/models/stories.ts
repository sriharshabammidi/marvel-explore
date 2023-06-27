import { Resource } from "./resource"

export interface Stories {
    available: number
    collectionURI: string
    items: Resource[]
    returned: number
}