export interface FeaturedProduct {
    id: string;
    name: string;
    imageUrl: string;
    presentationName?: string;
}
export interface ProductCategory {
    id: string;
    name: string;
    presentations: {
        id: string;
        name: string;
        imageUrl: string;
    }[];
}
export interface Product {
    id: string;
    name: string;
    presentationName?: string;
    meditionUnit: string;
    imagesUrls: string[];
    specifications: {
        name: string;
        value: string;
    }[];
    description: string;
    featuresDetails: string;
    uses: {
        title: string;
        content: string;
    }[];
    relatedProducts: FeaturedProduct[];
}