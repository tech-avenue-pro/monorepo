import { FinalCTAFormContent } from "../../HomeView/FinalCTAWithForm";

export function getCTASectionContent(): FinalCTAFormContent {
    const ctaSectionData = require("./cta-section.json");
    return ctaSectionData as FinalCTAFormContent;
}
