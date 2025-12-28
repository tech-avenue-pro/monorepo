interface Services {
    linkTitle: string;
    services: Service[];
}

interface Service {
    title: string;
    description: string;
    image: string;
    srcSet: string;
    alt: string;
}
