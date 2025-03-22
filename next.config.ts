import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net"
      }
    ]
  },
};

export default nextConfig;
