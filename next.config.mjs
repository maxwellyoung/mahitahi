/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              "private-state-token-redemption=(), private-state-token-issuance=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  experimental: {
    optimizeFonts: true,
  },
};

export default nextConfig;
