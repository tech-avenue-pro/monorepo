export enum DSTextVariant {
    /**
     * 📱 36px (text-4xl)
     * 📲 48px (text-5xl)
     * 🖥️ 60px (text-6xl)
     * Hero title — biggest type scale
     */
    largestTitle = "largestTitle",

    /**
     * 📱 30px (text-3xl)
     * 📲 36px (text-4xl)
     * 🖥️ 48px (text-5xl)
     */
    largerTitle = "largerTitle",

    /**
     * 📱 24px (text-2xl)
     * 📲 30px (text-3xl)
     * 🖥️ 36px (text-4xl)
     */
    largeTitle = "largeTitle",

    /**
     * 📱 24px (text-2xl)
     * 📲 30px (text-3xl)
     * 🖥️ 36px (text-4xl)
     */
    title1 = "title1",

    /**
     * 📱 20px (text-xl)
     * 📲 24px (text-2xl)
     * 🖥️ 30px (text-3xl)
     */
    title2 = "title2",

    /**
     * 📱 18px (text-lg)
     * 📲 20px (text-xl)
     * 🖥️ 24px (text-2xl)
     */
    title3 = "title3",

    /**
     * 📱 18px (text-lg)
     * 📲 20px (text-xl)
     * 🖥️ 24px (text-2xl)
     */
    headline1 = "headline1",

    /**
     * 📱 16px (text-base)
     * 📲 18px (text-lg)
     * 🖥️ 20px (text-xl)
     */
    headline2 = "headline2",

    /**
     * 📱 14px (text-sm)
     * 📲 16px (text-base)
     * 🖥️ 18px (text-lg)
     */
    headline3 = "headline3",

    /**
     * 📱 18px (text-lg)
     * 📲 20px (text-xl)
     * 🖥️ 24px (text-2xl)
     */
    bodyLarge = "bodyLarge",

    /**
     * 📱 16px (text-base)
     * 📲 18px (text-lg)
     * 🖥️ 20px (text-xl)
     */
    body = "body",

    /**
     * 📱 14px (text-sm)
     * 📲 16px (text-base)
     * 🖥️ 16px (text-base)
     */
    bodySmall = "bodySmall",

    /**
     * 📱 12px (text-xs)
     * 📲 12px (text-xs)
     * 🖥️ 14px (text-sm)
     */
    caption = "caption",

    /**
     * 📱 12px (text-xs)
     * 📲 12px (text-xs)
     * 🖥️ 14px (text-sm)
     */
    footnote = "footnote",
}

export enum DSTextColor {
    /**
     * Default primary text color
     * Light → #333 | Dark → #fff
     */
    primary = "primary",

    /**
     * Secondary text for sub-content
     * Light → #444 | Dark → #ddd
     */
    secondary = "secondary",

    /**
     * Tertiary text, muted labels
     */
    tertiary = "tertiary",

    /**
     * Quaternary text, subtle UI
     */
    quaternary = "quaternary",

    /**
     * Quinary text, soft readability
     */
    quinary = "quinary",

    /**
     * Brand color text
     */
    senary = "senary",

    /**
     * Darkest text in light mode
     */
    septenary = "septenary",

    /**
     * Themed tint text (varies by color scheme)
     */
    tintTheme = "tint-theme",

    /** Success text (green) */
    success = "success",

    /** Warning text (yellow) */
    warning = "warning",

    /** Alert text (red) */
    critical = "critical",

    /** Brand accent */
    accent = "accent",

    /** Pure white */
    white = "white",

    /** Slightly dim white text */
    whiteVariant1 = "white-variation1",

    /** Extended gray palette */
    gray3333 = "gray-3333",
    gray4444 = "gray-4444",
    gray5555 = "gray-5555",
    gray7777 = "gray-7777",
    graybbbb = "gray-bbbb",
}

// Font weight tokens — maps common names to numeric values
export enum DSTextWeight {
    thin = 100,
    extraLight = 200,
    light = 300,
    normal = 400,
    regular = 400,
    book = 400,
    medium = 500,
    semiBold = 600,
    demiBold = 600,
    bold = 700,
    extraBold = 800,
    ultraBold = 800,
    black = 900,
    heavy = 900,
}

export const variantClasses: Record<DSTextVariant, string> = {
    [DSTextVariant.largestTitle]: "ds-text-largest-title",
    [DSTextVariant.largerTitle]: "ds-text-larger-title",
    [DSTextVariant.largeTitle]: "ds-text-large-title",
    [DSTextVariant.title1]: "ds-text-title1",
    [DSTextVariant.title2]: "ds-text-title2",
    [DSTextVariant.title3]: "ds-text-title3",
    [DSTextVariant.headline1]: "ds-text-headline1",
    [DSTextVariant.headline2]: "ds-text-headline2",
    [DSTextVariant.headline3]: "ds-text-headline3",
    [DSTextVariant.bodyLarge]: "ds-text-body-large",
    [DSTextVariant.body]: "ds-text-body",
    [DSTextVariant.bodySmall]: "ds-text-body-small",
    [DSTextVariant.caption]: "ds-text-caption",
    [DSTextVariant.footnote]: "ds-text-footnote",
};

export const colorClasses: Record<DSTextColor, string> = {
    [DSTextColor.primary]: "ds-text-color-primary",
    [DSTextColor.secondary]: "ds-text-color-secondary",
    [DSTextColor.tertiary]: "ds-text-color-tertiary",
    [DSTextColor.quaternary]: "ds-text-color-quaternary",
    [DSTextColor.quinary]: "ds-text-color-quinary",
    [DSTextColor.senary]: "ds-text-color-senary",
    [DSTextColor.septenary]: "ds-text-color-septenary",
    [DSTextColor.tintTheme]: "ds-text-color-tint-theme",
    [DSTextColor.success]: "ds-text-color-success",
    [DSTextColor.warning]: "ds-text-color-warning",
    [DSTextColor.critical]: "ds-text-color-critical",
    [DSTextColor.accent]: "ds-text-color-accent",
    [DSTextColor.white]: "ds-text-color-white",
    [DSTextColor.whiteVariant1]: "ds-text-color-white-variation1",
    [DSTextColor.gray3333]: "ds-text-color-gray-3333",
    [DSTextColor.gray4444]: "ds-text-color-gray-4444",
    [DSTextColor.gray5555]: "ds-text-color-gray-5555",
    [DSTextColor.gray7777]: "ds-text-color-gray-7777",
    [DSTextColor.graybbbb]: "ds-text-color-gray-bbbb",
};

export const textColorVars: Record<DSTextColor, string> = {
    [DSTextColor.primary]: "var(--text-primary)",
    [DSTextColor.secondary]: "var(--text-secondary)",
    [DSTextColor.tertiary]: "var(--text-tertiary)",
    [DSTextColor.quaternary]: "var(--text-quaternary)",
    [DSTextColor.quinary]: "var(--text-quinary)",
    [DSTextColor.senary]: "var(--text-senary)",
    [DSTextColor.septenary]: "var(--text-septenary)",
    [DSTextColor.tintTheme]: "var(--text-tint-theme)",
    [DSTextColor.success]: "var(--text-success)",
    [DSTextColor.warning]: "var(--text-info)",
    [DSTextColor.critical]: "var(--text-critical)",
    [DSTextColor.accent]: "var(--text-accent)",
    [DSTextColor.white]: "var(--text-white)",
    [DSTextColor.whiteVariant1]: "var(--text-white-variation1)",
    [DSTextColor.gray3333]: "var(--text-gray-3333)",
    [DSTextColor.gray4444]: "var(--text-gray-4444)",
    [DSTextColor.gray5555]: "var(--text-gray-5555)",
    [DSTextColor.gray7777]: "var(--text-gray-7777)",
    [DSTextColor.graybbbb]: "var(--text-gray-bbbb)",
};
