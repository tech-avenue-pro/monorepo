import { FinalCTAFormContent } from "@repo/ui/design-systems/components/cta/FinalCTAWithForm";

export function getCTASectionContent(): FinalCTAFormContent {
    const ctaSectionData = require("./cta-section.json");
    return ctaSectionData as FinalCTAFormContent;
}
