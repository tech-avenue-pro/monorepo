import footerData from "./footer-content.json";
import { FooterContent } from "@repo/ui/design-systems/components/footer/Footer";

export function getFooterContent(): FooterContent {
    return footerData as FooterContent;
}
