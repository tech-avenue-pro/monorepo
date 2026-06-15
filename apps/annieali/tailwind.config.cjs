const preset = require("@repo/styles/tailwind-preset");

/** @type {import("tailwindcss").Config} */
const config = {
    ...preset,
    content: [
        ...preset.content,
        "./app/**/*.{ts,tsx,mdx}",
        "../../packages/ui/**/*.{ts,tsx}",
    ],
};

module.exports = config;
