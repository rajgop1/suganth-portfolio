export type AppIconsInterface = {
    sass: boolean;
    desktop_app: boolean;
    web: boolean;
    android: boolean;
    ios: boolean;
}


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

interface Multiport extends AppIconsInterface{
    id: number;
    description: string;
    banner_image: {
        data: ImageAttributes;
    };
    image: {
        data: ImageAttributes;
    };
    project_name:string;
    sector:string;
    link_to:string;
} ;

interface Singleport {
    id: number;
    description: string;
    banner_image: {
        data: ImageAttributes;
    };
    two_column_layout:boolean;
    card_style_background:boolean
}


export type MultiPortfolioPageAttributes = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    organisation:{organisation:string};
    project_name:string;
    sector: string;
    slug: string;
    multiport: Multiport[];
    thumbnail_image: {
        data: ImageAttributes;
    };
} & AppIconsInterface;

export type SinglePortfolioPageAttributes = {
    sector: string;
    organisation:{organisation: string};
    slug: string;
    project_name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail_image: {
        data: ImageAttributes;
    };
    singleport: Singleport[];
    relevent_images: {
        data: ImageAttributes[]
    }
} & AppIconsInterface;

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

export interface HomePageGridCard {
    data: {
        id: number;
        attributes: {
            title: string;
            description: string;
            link: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        };
    };
    meta: object; // Assuming meta is empty, but it can be defined with specific fields if needed
}