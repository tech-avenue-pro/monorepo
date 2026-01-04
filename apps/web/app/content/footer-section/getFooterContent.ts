import { FooterContent } from "../../HomeView/Footer";

export function getFooterContent(): FooterContent {
    const footerData = require("./footer-content.json");
    return footerData as FooterContent;
}
