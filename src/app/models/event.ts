import { Resource } from "./resource"
import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface Event {
    id: number
    title: string
    description: string
    resourceURI: string
    urls: Url[]
    modified: string
    start?: string
    end?: string
    thumbnail: Thumbnail
    creators: Resources
    characters: Resources
    stories: Resources
    comics: Resources
    series: Resources
    next?: Resource
    previous?: Resource
}