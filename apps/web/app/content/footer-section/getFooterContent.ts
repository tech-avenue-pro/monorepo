import { FooterContent } from "@repo/ui/design-systems/components/footer/Footer";

export function getFooterContent(): FooterContent {
    const footerData = require("./footer-content.json");
    return footerData as FooterContent;
}
