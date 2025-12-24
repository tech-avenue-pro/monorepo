/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["../../apps/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
    theme: {
        extend: {
            borderRadius: { xl: "1rem" },
        },
    },
    plugins: [],
};
