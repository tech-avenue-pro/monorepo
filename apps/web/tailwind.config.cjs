const preset = require("@repo/styles/tailwind-preset");

/** @type {import("tailwindcss").Config} */
const config = {
    ...preset,
    content: [
        ...preset.content,
        "./app/**/*.{ts,tsx,mdx}", // app-specific
        "../../packages/ui/**/*.{ts,tsx}", // shared UI
    ],
};

module.exports = config;
