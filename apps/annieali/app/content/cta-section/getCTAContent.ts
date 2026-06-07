import ctaData from "./cta-content.json";
import { FinalCTAFormContent } from "@repo/ui/design-systems/components/cta/FinalCTAWithForm";

export function getCTAContent(): FinalCTAFormContent {
    return ctaData as FinalCTAFormContent;
}
