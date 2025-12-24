export enum FontStyle {
    Heading = "heading",
    Body = "body",
}

export const fontStyleClasses: Record<FontStyle, string> = {
    [FontStyle.Heading]: "font-heading",
    [FontStyle.Body]: "font-body",
};
