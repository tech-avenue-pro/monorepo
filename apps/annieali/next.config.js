/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                ],
            },
        ];
    },
};

export default nextConfig;
