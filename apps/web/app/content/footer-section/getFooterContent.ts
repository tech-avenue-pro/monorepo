import { FooterContent } from "@repo/ui/design-systems/components/footer/footer-content";

export function getFooterContent(): FooterContent {
    const footerData = require("./footer-content.json");
    return footerData as FooterContent;
}
