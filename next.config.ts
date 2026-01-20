import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.harshsandhu.com",
        pathname: "/api/img",
      },
    ],
  },
};

export default nextConfig;
