import { FinalCTAFormContent } from "@repo/ui/design-systems/components/cta/FinalCTAWithForm";

export function getCTASectionContent(): FinalCTAFormContent {
    const ctaSectionData = require("./cta-section-content.json");
    return ctaSectionData as FinalCTAFormContent;
}
