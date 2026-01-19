import React from "react";
interface RegularContainerProps {
    children: React.ReactNode;
}
export default function RegularContainer({ children }: RegularContainerProps) {
    return <div className="max-w-360 mx-auto px-4 md:px-8">{children}</div>;
}
