export enum FontStyle {
    Heading = "heading",
    Body = "body",
    Accent = "accent",
}

export const fontStyleClasses: Record<FontStyle, string> = {
    [FontStyle.Heading]: "font-heading",
    [FontStyle.Body]: "font-body",
    [FontStyle.Accent]: "font-accent",
};
