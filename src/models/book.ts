interface VolumeInfo {
    allowAnonLogging?: boolean,
    authors?: string[],
    averageRating?: number,
    canonicalVolumeLink?: string,
    categories?: string[],
    contentVersion?: string,
    description?: string,
    imageLinks?: {
        smallThumbnail?: string,
        thumbnail?: string,
    }
    industryIdentifiers?: any,
    infoLink?: string,
    languaje?: string,
    maturityRating?: string,
    pageCount?: number,
    panelizationSummary?: {
        containsEpubBubbles?: boolean,
        containsImageBubbles?: boolean
    },
    previewLink?: string,
    printType?: string,
    publishedDate?: string,
    publisher?: string,
    ratingsCount?: number,
    readingModes?: {
        image?: boolean,
        text?: boolean
    },
    subtitle?: string,
    title?: string
}

export interface Book {
    accessInfo?: any,
    salesInfo?: any,
    searchInfo?: any,
    selfLink?: any,
    etag?: string,
    id?: string,
    kind?: string,
    volumeInfo?: VolumeInfo
}
