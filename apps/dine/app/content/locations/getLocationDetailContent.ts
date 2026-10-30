import locationDetailData from "./location-detail-content.json";
import { LocationDetailSectionContent } from "@repo/ui/design-systems/components/locations/location-detail-content.ts";

export function getLocationDetailContent(): LocationDetailSectionContent {
    return locationDetailData as LocationDetailSectionContent;
}
