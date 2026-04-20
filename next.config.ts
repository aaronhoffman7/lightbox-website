import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://fonts.cdnfonts.com",
              "font-src 'self' https://fonts.cdnfonts.com",
              "frame-src https://www.google.com",
              "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com",
              "img-src 'self' data: https:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
