import { Resource } from "./resource"
import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"

export interface Story {
    id: number
    title: string
    description: string
    resourceURI: string
    type: string
    modified: string
    thumbnail: Thumbnail
    creators: Resources
    characters: Resources
    series: Resources
    comics: Resources
    events: Resources
    originalIssue: Resource
}