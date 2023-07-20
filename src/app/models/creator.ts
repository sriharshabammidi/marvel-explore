import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface Creator {
    id: number
    firstName: string
    middleName: string
    lastName: string
    suffix: string
    fullName: string
    modified: string
    thumbnail: Thumbnail
    resourceURI: string
    comics: Resources
    series: Resources
    stories: Resources
    events: Resources
    urls: Url[]
}