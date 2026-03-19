import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@repo/env", "@repo/ui", "@repo/validation"],
};

export default nextConfig;
