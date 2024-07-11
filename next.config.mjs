/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: "export",
    basePath: "/suganth-portfolio",
    images: {
        unoptimized: true,
    },
    trailingSlash: true
};

export default nextConfig;
