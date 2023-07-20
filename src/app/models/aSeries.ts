import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface aSeries {
    id: number
    title: string
    description: any
    resourceURI: string
    urls: Url[]
    startYear: number
    endYear: number
    rating: string
    type: string
    modified: string
    thumbnail: Thumbnail
    creators: Resources
    characters: Resources
    stories: Resources
    comics: Resources
    events: Resources
    next: any
    previous: any
}