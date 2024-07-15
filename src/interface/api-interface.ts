type ImageFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
};

type ImageAttributes = {
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            large: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            thumbnail: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
        createdAt: string;
        updatedAt: string;
    }
};

interface Multiport {
    id: number;
    description: string;
    banner_image: {
        data: ImageAttributes;
    };
    image: {
        data: ImageAttributes;
    };
}

interface Singleport {
    id: number;
    description: string;
    banner_image: {
        data: ImageAttributes;
    };
}


export type MultiPortfolioPageAttributes = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    slug: string;
    sass: boolean;
    desktop_app: boolean;
    web: boolean;
    android: boolean;
    ios: boolean;
    multiport: Multiport[];
    thumbnail_image: {
        data: ImageAttributes;
    };
};

export type SinglePortfolioPageAttributes = {
    title: string;
    organisation:string;
    slug: string;
    project_name: string;
    sass: boolean;
    desktop_app: boolean;
    web: boolean;
    android: boolean;
    ios: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail_image: {
        data: ImageAttributes;
    };
    singleport: Singleport[];
    relevent_images:{
        data: ImageAttributes[]
    }
};

export type MultiPortfolioPageData = {
    id: number;
    attributes: MultiPortfolioPageAttributes;
};

export type SinglePortfolioPageData = {
    id: number;
    attributes: SinglePortfolioPageAttributes;
};

type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
};

type Meta = {
    pagination: Pagination;
};

export type MultiPortfolioPageSchema = {
    data: MultiPortfolioPageData[];
    meta: Meta;
};

export type SinglePortfolioPageSchema = {
    data: SinglePortfolioPageData[];
    meta: Meta;
};