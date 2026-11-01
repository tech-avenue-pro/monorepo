import ca from "./ca.json";
import pk from "./pk.json";

const markets = { ca, pk };

export type SiteMarket = keyof typeof markets;

export function getMarketConfig(market = process.env.SITE_MARKET ?? "ca") {
    if (market !== "ca" && market !== "pk") {
        throw new Error("SITE_MARKET must be either 'ca' or 'pk'.");
    }

    const config = markets[market];
    const whatsappPhone = config.phoneNumber.replace(/\D/g, "");

    return {
        ...config,
        market,
        whatsappPhone,
        whatsappUrl: `https://wa.me/${whatsappPhone}`,
    };
}

export function getMarketAlternates(path: string) {
    const market = getMarketConfig();

    return {
        canonical: new URL(path, market.siteUrl).href,
        languages: {
            "en-CA": new URL(path, ca.siteUrl).href,
            "en-PK": new URL(path, pk.siteUrl).href,
            "x-default": new URL(path, ca.siteUrl).href,
        },
    };
}
