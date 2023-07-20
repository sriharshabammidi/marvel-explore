import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface Character {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: Thumbnail
    resourceURI: string
    comics: Resources
    series: Resources
    stories: Resources
    events: Resources
    urls: Url[]
}