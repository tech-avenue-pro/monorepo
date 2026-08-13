export type IconFeatureGridIconKey =
    | "heart"
    | "star"
    | "book"
    | "leaf"
    | "compass"
    | "shield"
    | "spark"
    | "circle";

export interface IconFeatureGridItem {
    icon: IconFeatureGridIconKey;
    title: string;
    description: string;
}

export interface IconFeatureGridContent {
    sectionTitle: string;
    items: IconFeatureGridItem[];
}
