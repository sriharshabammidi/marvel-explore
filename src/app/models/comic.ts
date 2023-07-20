import { ComicText } from "./comicText"
import { MarvelDate } from "./marvelDate"
import { Price } from "./price"
import { Resource } from "./resource"
import { Resources } from "./resources"
import { Thumbnail } from "./thumbnail"
import { Url } from "./url"

export interface Comic {
    id: number
    digitalId: number
    title: string
    issueNumber: number
    variantDescription: string
    description: string
    modified: string
    isbn: string
    upc: string
    diamondCode: string
    ean: string
    issn: string
    format: string
    pageCount: number
    textObjects: ComicText[]
    resourceURI: string
    urls: Url[]
    series: Resources
    variants: Resource[]
    collections: any[]
    collectedIssues: Resource[]
    dates: MarvelDate[]
    prices: Price[]
    thumbnail: Thumbnail
    images: Thumbnail[]
    creators: Resources
    characters: Resources
    stories: Resources
    events: Resources
}