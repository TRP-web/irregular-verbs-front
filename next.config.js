
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    experimental: { images: { allowFutureImage: true } },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig