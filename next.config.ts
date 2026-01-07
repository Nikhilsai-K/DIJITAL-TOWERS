import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trigger restart for new dependencies
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.pngmart.com",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
      },
      {
        protocol: "https",
        hostname: "www.pngall.com",
      },
    ],
  },
};

export default nextConfig;
