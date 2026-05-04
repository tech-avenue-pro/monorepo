import locationsData from "./locations-content.json";
import { LocationsSectionContent } from "@repo/ui/design-systems/components/locations/LocationsSection";

export function getLocationsContent(): LocationsSectionContent {
    return locationsData as LocationsSectionContent;
}
