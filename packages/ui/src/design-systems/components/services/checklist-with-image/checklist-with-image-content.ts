export interface ChecklistWithImageContent {
    sectionTitle: string;
    items: string[];
    image: { src: string; srcSet: string; alt: string };
}
