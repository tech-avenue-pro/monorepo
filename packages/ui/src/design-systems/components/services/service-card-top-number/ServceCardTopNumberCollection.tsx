import React from "react";
import ServiceCardTopNumber from "./ServiceCardTopNumber";
import { ServiceCardTopNumberContent } from "./service-card-top-number-content";

interface ServceCardTopNumberCollectionProps {
    collection: ServiceCardTopNumberContent[];
}

export default function ServceCardTopNumberCollection({
    collection,
}: ServceCardTopNumberCollectionProps) {
    return (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collection.map((item) => (
                <ServiceCardTopNumber key={item.number} {...item} />
            ))}
        </div>
    );
}
