import React from "react";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;

    return <div>The slug is {slug}</div>;
}
