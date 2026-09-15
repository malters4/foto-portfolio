import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only needed for the local placeholder SVGs — remove once real JPG/PNG photos are in place.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
