import { ServiceCard } from "./ServiceCard";
import { DSText, DSTextVariant } from "@repo/ui/design-systems/DSText";

export interface ServicesContent {
    sectionTitle: string;
    sectionTagline: string;
    sectionTagDescription: string;
    linkTitle: string;
    services: ServiceDetailContent[];
}

export interface ServiceDetailContent {
    id: number;
    title: string;
    description: string;
    image: string;
    srcSet: string;
    alt: string;
    href: string;
    badge?: string;
}

export default function ServiceSection({
    sectionTitle,
    sectionTagline,
    sectionTagDescription,
    linkTitle,
    services,
}: ServicesContent) {
    return (
        <section className="mx-auto max-w-6xl px-4">
            <div className="flex flex-start align-top md:justify-between mb-16 items-start gap-1 md:gap-16 flex-col md:flex-row">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    className="text-center mb-6 shrink-0"
                >
                    {sectionTitle}
                </DSText>
                <div className="flex flex-col items-start">
                    <DSText
                        as="h3"
                        variant={DSTextVariant.title2}
                        className="text-center mb-2"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: sectionTagline }}
                        />
                    </DSText>
                    <p className="">{sectionTagDescription}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        image={
                            <img
                                src={service.image}
                                alt={service.alt}
                                srcSet={service.srcSet}
                                className=""
                            />
                        }
                        title={service.title}
                        description={service.description}
                        href={service.href}
                        badge="Availeble Now"
                        linkTitle={linkTitle}
                    />
                ))}
            </div>
        </section>
    );
}
