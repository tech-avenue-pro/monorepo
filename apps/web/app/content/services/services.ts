import servicesData from "./services.json";

export interface Services {
    linkTitle: string;
    services: Service[];
}

export interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    srcSet: string;
    alt: string;
    href: string;
    badge?: string;
}

export function getServices(): Services {
    return servicesData as Services;
}
