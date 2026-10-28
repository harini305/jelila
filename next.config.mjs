/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,

  // Images in /public are pre-optimised WebP files that never change in place
  // (a new version gets a new file name), so browsers and the CDN can keep them
  // for a year instead of revalidating on every visit.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
