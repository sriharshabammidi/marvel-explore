import { Comics } from "./comics"
import { Events } from "./Events"
import { Series } from "./series"
import { Stories } from "./stories"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface Character {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: Thumbnail
    resourceURI: string
    comics: Comics
    series: Series
    stories: Stories
    events: Events
    urls: Url[]
}