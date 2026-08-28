export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    _id: string;
    title: string;
    sold: number;
    subcategory: Subcategory[];
    category: Category;
    brand: Brand;
    price: number;
    quantity: number;
    description: string;
    images: string[];
    ratingsQuantity: number;
    imageCover: string;
    ratingsAverage: number;
    priceAfterDiscount?: number;
}