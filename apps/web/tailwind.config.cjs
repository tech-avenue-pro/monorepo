const preset = require("@acme/styles/tailwind-preset");

module.exports = {
    ...preset,
    content: [
        ...preset.content,
        "./src/**/*.{ts,tsx}", // app-specific
    ],
};
