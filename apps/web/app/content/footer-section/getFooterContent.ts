import type { FooterContent } from "@repo/ui/design-systems/components/footer/Footer";
import footerData from "./footer-content.json";
import secondaryFooterData from "./secondary-footer-content.json";
import { getMarketConfig } from "../markets/config";

export function getFooterContent(): FooterContent {
    return {
        ...footerData,
        phoneNumber: getMarketConfig().phoneNumber,
    } as FooterContent;
}

export function getSecondaryFooterContent(): FooterContent {
    return {
        ...secondaryFooterData,
        phoneNumber: getMarketConfig().phoneNumber,
    } as FooterContent;
}
