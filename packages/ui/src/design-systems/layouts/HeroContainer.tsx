import React from "react";
interface HeroSectionProps {
    children: React.ReactNode;
}
export default function HeroContainer({ children }: HeroSectionProps) {
    return <div className="relative z-10 px-4 md:px-8">{children}</div>;
}
