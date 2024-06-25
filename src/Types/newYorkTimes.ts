export type StoriesMultimediaType = {
    url: string;
    format: string;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}

export type NewYorkTimesStoriesType = {
    section: string;
    title: string;
    abstract: string;
    url: string;
    published_date: string;
    byline: string;
    multmedia: StoriesMultimediaType[]
}